const request=require('./util/requestHandle.js');
var uri=process.env.DISCOVERY_CLUSTER || 'http://qloudkernel.service.sd';
var serviceIngress=process.env.SERVICE_INGRESS || 'qlouddemo.default.service.sd';
var serviceCluster=process.env.SERVICE_CLUSTER || 'qlouddemo.default';

const uuid = require('node-uuid');
var serviceName=process.env.SERVICE_NAME || 'qlouddemo';
exports.initConsul = function initConsul(callback) {
    getConsule();
    //判断是否已经注册过
    function getConsule(){
        var options =
            {
                url: uri+'/discovery/services/'+serviceName,
                method: 'GET'
            };
        function callbacks(error, response, data) {
            if(error){
                callback("initconsul==========================="+error);
                return;
            }
            data=JSON.parse(data);
            if(data.length>0){
                callback(null,'===============consul已经注册，无需重复注册==================');
            }else{
               initConsule();

            }
        }
        request(options, callbacks);
    }
    //注册
    function initConsule(){
        var options =
            {
                url: uri+'/discovery/services',
                method: 'POST',
                json:true,
                body:{
                    "ID": uuid.v1(),
                    "Name": serviceName,
                    "Address": serviceIngress,
                    "Port": 443,
                    "Tags": [
                        "qloudnodejs"
                    ],
                    "Check": {
                        "ID": "qlouddemoCheck"+uuid.v1(),
                        "Name": "qlouddemoNodeCheck",
                        "HTTP":'http://'+serviceCluster+':8080',
                        "Interval": "30s",
                        "Timeout": "5s",
                        "DeregisterCriticalServiceAfter":"3m",
                        "TLSSkipVerify": false
                    },
                    "Meta": {
                        "LocalHost":serviceCluster,
                        "Schema": "http",
                        "LocalPort": "8080"

                    }
                }
            };
        function callbacks(error, response, data) {
            if(error){
                callback("initconsul==========================="+error);
                return;
            }

            callback(null,'===============conslu注册成功==================');

        }
        request(options, callbacks);
    }

}
