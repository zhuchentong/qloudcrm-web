//对reques统一处理
var syncRequest = require('sync-request');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
module.exports =function syncRequestHandle(method, url, option) {
      return   syncRequest(method, url, option);


}

