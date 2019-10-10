var request=require('../../../util/requestHandle.js');
var yamml=require('node-yaml');
var fs=require('fs');
var multipart = require('connect-multiparty');
var DIR = './uploadFiles/apiproxy';
var multipartMiddleware = multipart({uploadDir:DIR});
module.exports = function attachHandlers(router,io) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    //获取所有读取yaml文件信息
    router.post('/v1/readYaml',multipartMiddleware,
        function(req, res) {
        try {
            var yamlJson=yamml.readSync("../../../"+req.files.files.path);
            //读取完成后删除文件
            fs.unlinkSync("./"+req.files.files.path);
            var newYaml={
                "schemes":yamlJson.schemes&&yamlJson.schemes.length>0?yamlJson.schemes[0]:"",
                "host":yamlJson.host?yamlJson.host:"",
                "basePath":yamlJson.basePath?yamlJson.basePath:"",
                "description":yamlJson.info&&yamlJson.info.description?yamlJson.info.description:"",
                "paths":[]
            }
            var path=yamlJson.paths?yamlJson.paths:{};
            for (var key in path) {
                for(var k in path[key]){
                    newYaml.paths.push({"path":key,"verb":k,"operationId":path[key][k].operationId,"summary":path[key][k].summary});
                }
            }
            res.send({"statusCode":200,"code":'000',"message":"success","data":newYaml});
        }catch (e) {
            res.send({"statusCode":500,"code":'001',"message":"yaml文件格式不正确","data":e});
        }

        });

};
