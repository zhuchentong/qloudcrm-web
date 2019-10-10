#!/bin/bash

if [ -n "$DISABLE_FILEBEAT" -a "$DISABLE_FILEBEAT" = "true" ]; then
	exit
fi

FILEBEAT_LOG="$FILEBEAT_HOME/filebeat.log"

SCHEMA=
HOST=
PORT=
NAME=
STATUS=

#
if [ -n "$DISCOVERY_USED" -a "$DISCOVERY_USED" != "true" ]; then
	exit
fi
#
if [ "$DISCOVERY_SSL" = "true" ]; then
	SCHEMA="https"
else
	SCHEMA="http"
fi
#
if [ -z "$DISCOVERY_NAME" ]; then
	NAME="kernel"
else
	NAME="$DISCOVERY_NAME"
fi
#
if [ -z "$DISCOVERY_CLUSTER" ]; then
	HOST="qloudkernel"
else
	HOST=$DISCOVERY_CLUSTER
fi
if [ -z "$DISCOVERY_CLUSTER_PORT" ]; then
	PORT="8888"
else
	PORT=$DISCOVERY_CLUSTER_PORT
fi

# Try local
`nc -z -v -w 10 $HOST $PORT >> $FILEBEAT_LOG 2>&1`
if [  "$?" = 0 ]; then
	echo "Try local discovery succeed..." >> $FILEBEAT_LOG
	STATUS="true"
else
	if [ -z "$DISCOVERY_INGRESS" ]; then
		HOST="qloudkernel.service.sd"
	else
		HOST=${DISCOVERY_INGRESS#*//}
	fi
	if [ -z "$DISCOVERY_INGRESS_PORT" ]; then
		PORT="80"
	else
		PORT=$DISCOVERY_INGRESS_PORT
	fi
	# Try public
	`nc -z -v -w 10 $HOST $PORT >> $FILEBEAT_LOG 2>&1`
	if [  "$?" = 0 ]; then
		echo "Try public discovery succeed..." >> $FILEBEAT_LOG
		STATUS="false"
	else
		echo "Try all discovery failed..." >> $FILEBEAT_LOG
		exit
	fi
fi

DISCOVERY_RESULT=$(curl -k -X GET $SCHEMA://$HOST:$PORT/discovery/services/$NAME)
echo "Check discovery self result...$DISCOVERY_RESULT" >> $FILEBEAT_LOG

ADMIN_HOST=
ADMIN_PORT=

if [ "$STATUS" = "true" ]; then
	ADMIN_HOST=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceMeta.LocalHost')
	ADMIN_PORT=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceMeta.LocalAdminPort')
else
	ADMIN_HOST=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceMeta.PublicAdminHost')
	ADMIN_PORT=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceMeta.PublicAdminPort')
fi

# Try discovery admin
`nc -z -v -w 10 $ADMIN_HOST $ADMIN_PORT >> $FILEBEAT_LOG 2>&1`
if [  "$?" = 0 ]; then
	echo "Try discovery admin succeed..." >> $FILEBEAT_LOG
else
	echo "Try discovery admin failed..." >> $FILEBEAT_LOG
	exit
fi

# Try discovery security
NODE_TOKEN=
SECURITY_RESULT=$(curl -k -X GET $SCHEMA://$ADMIN_HOST:$ADMIN_PORT/__admin/security/)
ENABLE_SECURITY=$(echo $SECURITY_RESULT | jq -r '.security_enable')
if [ "$ENABLE_SECURITY" = "true" ]; then
	echo "Try discovery security token..." >> $FILEBEAT_LOG
	NODE_TOKEN_RESULT=$(curl -k -X POST $SCHEMA://$HOST:$PORT/security/nodes/token \
	  -H 'Content-Type: application/json' \
	  -d '{
	  "servicename": "sysadmin",
	  "hostname": "localhost"
	}')
	NODE_TOKEN=$(echo $NODE_TOKEN_RESULT | jq -r '.token')
fi

# Use "filebeat" as service role
JWT_TOKEN=
if [ "$ENABLE_SECURITY" = "true" ]; then
    echo "Try discovery security role...$SERVICE_NAME" >> $FILEBEAT_LOG
    JWT_TOKEN_RESULT=$(curl -k -X POST $SCHEMA://$HOST:$PORT/security/pki/sign/${NODE_TOKEN} \
      -H 'Content-Type: application/json' \
      -d "{\"rolename\": \"filebeat\"}")
    JWT_TOKEN=$(echo $JWT_TOKEN_RESULT | jq -r '.jwt')
fi

DISCOVERY_RESULT=$(curl -k -H "X-Qloud-Token: $JWT_TOKEN" -X GET $SCHEMA://$HOST:$PORT/discovery/services/logstash)
echo "Check discovery logstash result...$DISCOVERY_RESULT" >> $FILEBEAT_LOG

#
# test
#
while [ true ];
do
	LOGSTASH_HOST=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceMeta.LocalHost')
	LOGSTASH_PORT=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceMeta.LocalPort')
	if [ "$LOGSTASH_HOST" != "" -a "$LOGSTASH_PORT" != "" ]; then
		# Try logstash local
		`nc -z -v -w 10 $LOGSTASH_HOST $LOGSTASH_PORT >> $FILEBEAT_LOG 2>&1`
		if [  "$?" = 0 ]; then
			echo "Try local logstash succeed..." >> $FILEBEAT_LOG
			break
		else
			LOGSTASH_HOST=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceAddress')
			LOGSTASH_PORT=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServicePort')
			# Try logstash public
			`nc -z -v -w 10 $LOGSTASH_HOST $LOGSTASH_PORT >> $FILEBEAT_LOG 2>&1`
			if [  "$?" = 0 ]; then
				echo "Try public logstash succeed..." >> $FILEBEAT_LOG
				break
			else
				echo "Try all logstash failed and will try it next..." >> $FILEBEAT_LOG
				sleep 60
			fi
		fi
	else
		LOGSTASH_HOST=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServiceAddress')
		LOGSTASH_PORT=$(echo $DISCOVERY_RESULT | jq -r '.[0]|.ServicePort')
		# Try logstash public
		`nc -z -v -w 10 $LOGSTASH_HOST $LOGSTASH_PORT >> $FILEBEAT_LOG 2>&1`
		if [  "$?" = 0 ]; then
			echo "Try public logstash succeed..." >> $FILEBEAT_LOG
			break
		else
			echo "Try public logstash failed and will try it next..." >> $FILEBEAT_LOG
			sleep 60
		fi
	fi
done

#
# config
#
cat > ${FILEBEAT_HOME}/filebeat.yml <<EOF
filebeat.prospectors:
- type: log
  enabled: true
  paths:
  - /var/log/*.log
  - /app/log/*.log
output.logstash:
  hosts: ["$LOGSTASH_HOST:$LOGSTASH_PORT"]
  index: ${SERVICE_CLUSTER}
EOF

#
# run
#
cd $FILEBEAT_HOME && ./filebeat -e -c filebeat.yml -d "publish"
