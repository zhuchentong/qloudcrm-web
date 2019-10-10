
#========================================华丽的分割线========================================
FROM node:10.16.2-slim
#=============安装filebeat环境===============
# ENV FILEBEAT_HOME=/usr/share/filebeat

# RUN set -x; \
#   sed -i 's/http:\/\/archive.ubuntu.com\/ubuntu\//http:\/\/mirrors.163.com\/ubuntu\//g' /etc/apt/sources.list \
#   # install supervisord
#   apt-get update; \
#   apt-get install -y --no-install-recommends supervisor; \
#   rm -rf /var/lib/apt/lists/*; \
#   apt-get clean; \
#   mkdir -p /app/log; \
#   \
# install filebeat
# curl -Lso - https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.0.1-linux-x86_64.tar.gz | \
# tar zxf - -C /tmp && \
# mv /tmp/filebeat-6.0.1-linux-x86_64 ${FILEBEAT_HOME}; \
# \
# configure supervosord
# { \
# echo [program:filebeat]; \
# echo 'command=start-filebeat.sh'; \
# } > /etc/supervisor/conf.d/filebeat.conf; \
# init script
# mkdir -p /app/init.d;
# { \
# echo 'if [ "${ENABLE_FILEBEAT}" = "false" ]; then'; \
# echo '  echo "autostart=false" >> /etc/supervisor/conf.d/filebeat.conf'; \
# echo '  echo ">>> Filebeat is disabled"'; \
# echo 'fi'; \
# } > /app/init.d/filebeat.sh;

COPY [ "docker-entrypoint.sh",  "/usr/local/bin/" ]
# COPY [ "docker-entrypoint.sh", "start-filebeat.sh", "/usr/local/bin/" ]
# RUN npm install pm2 -g

ADD server.tgz /usr/opt/universal
# ADD start.sh  /app/init.d

WORKDIR /usr/opt/universal

ENTRYPOINT [ "node","qloud.start.js" ]

EXPOSE 80




