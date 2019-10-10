//对reques统一处理
var request=require('request');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
module.exports =function requestHandle(options,callback) {
    request(options,callback);
}

