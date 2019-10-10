var fs = require("fs");
var pluginPath = './public/plugins/';
var installpluginPath = './views/plugins/';
var pluginHandle=require('../util/pluginHandle.js');
var shell = require('shelljs');
var syncRequest = require('../util/syncRequestHandle.js');
var kernelUrl = process.env.DISCOVERY_CLUSTER || 'http://qloudkernel.service.sd';
module.exports = function attachHandlers(router, io) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
  //插件卸载
  router.get('/v1/uninstallPlugin',
    function (req, res) {
      var url = req.query.pluginCode;
      //卸载组装的文件
      try {
        fs.unlinkSync(installpluginPath + url + '/index.html');
      } catch (error) {

      }
      try {
        fs.unlinkSync(installpluginPath + url + '/index.pug');
      } catch (error) {

      }
      try {
        fs.rmdirSync(installpluginPath + url);
      } catch (error) {

      }

      //卸载源文件
      function rmFile(path) {
        var files = fs.readdirSync(path);
        if (files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var st = fs.statSync(path + '/' + file);
            if (st.isFile()) {
              fs.unlinkSync(path + '/' + file);
            } else {
              rmFile(path + '/' + file);
            }
          }
          fs.rmdirSync(path);
        } else {
          fs.rmdirSync(path);
        }
      }

      try {
        rmFile(pluginPath + url);
      } catch (error) {

      }

      io.emit("unbuildPlugin", url);
      var pluginls =pluginHandle.getPluginls().filter(item => {
        return item.url != '/plugins/' + url;
      });
        pluginHandle.setPliginls(pluginls);
      res.send({"statusCode": 200, "code": '000', "message": "插件卸载完成"});
    });

//插件安装
  router.get('/v1/installPlugin',
    function (req, res) {
      var code=req.query.pluginCode;
      var files =req.query.folderName || req.query.pluginCode;
      files = files.split('@')[0];
      var shellcommand = 'npm install ' + code + ' --unsafe-perm=true --allow-root --registry="http://192.168.11.22:8081/repository/npm-group/"';
      var pluginWhether = fs.existsSync(installpluginPath + files + '/index.pug');
      //只有没有安装过的插件才可以安装，如果需要重新安装则需要先卸载对应的插件再调用此接口
      if(!pluginWhether){
          if(req.query.fromRepo){
              console.log('===============');
              console.log(shellcommand);
              // 注意：shell.exec如果没有回调，默认是同步执行。如果提供了回调，则options里async不管设置为false还是true都是异步执行。
              shell.exec(shellcommand, function(code, stdout, stderr) {
                  console.log('code = >', code);
                  console.log('stdout = >', stdout);
                  console.log('stderr = >', stderr);
                  init();
              });
          }else{
              init();
          }

      }else{
          console.log("插件" + files + "已经安装，请不要重复安装");
          res.send({"statusCode": 200, "code": '000', "message": "插件" + files + "已经安装，请不要重复安装"});
      }
      function init(){
        try {
          console.info('try ----- pluginPath + files1', pluginPath + files);
          var st = fs.statSync(pluginPath + files);
          console.info('try ----- st', pluginPath + files);
          console.info('try ----- st.isFile()', st.isFile());
          if (!st.isFile()) {
            //判断插件的配置json是否存在
            var jsonexist = fs.existsSync(pluginPath + files + '/assets/config.json');
            if (jsonexist) {
              var jsonconfig = fs.readFileSync(pluginPath + files + '/assets/config.json', {"encoding": "utf8"});
              jsonconfig = JSON.parse(jsonconfig);
              console.log('try ====== jsonconfig', jsonconfig);
              if(jsonconfig.service&&jsonconfig.service.name&&jsonconfig.service.schema) {
                var pluName=jsonconfig.service.name;
                if(req.query.namespace){
                    pluName = pluName + '.' +req.query.namespace;
                }
                console.log('try ====== syncRequest  url', kernelUrl+'/discovery/services/'+pluName);
                var resData=syncRequest('GET',kernelUrl+'/discovery/services/'+pluName,{json:true});
                console.log('try ====== resData', resData);
                console.log('依赖插件信息'+pluName);
                console.log(resData);
                if (resData.statusCode == 200){
                    const newdata=JSON.parse(resData.getBody('utf8'));
                    console.log('try ====== newdata', newdata);
                    if(newdata.length>0&&newdata[0].ServiceAddress){
                        var name=jsonconfig.service.name.toUpperCase()+'BACKENDURL';
                        var url=newdata[0].ServiceAddress.includes('http')?newdata[0].ServiceAddress:jsonconfig.service.schema+'://'+newdata[0].ServiceAddress;
                        if(url[url.length-1]=="/"){
                            url=url.substring(0,url.length-1);
                        }
                        process.env[name]=url;
                        console.log('缓存环境变量',name,process.env[name]);
                    }
                }else{
                    logger.error('请求的url为：'+kernelUrl+'/discovery/services/'+jsonconfig.service.name+'，错误处理中间捕获异常:GET request Status is not Fine!!');
                }
              }
              if (jsonconfig.type && jsonconfig.type == 'iframe') {
                newplugin = {
                    "name": jsonconfig.pluginName,
                    "icon": jsonconfig.pluginIcon || '',
                    "abbr": jsonconfig.pluginAbbr || '',
                    "img": '/plugins/' + files + jsonconfig.pluginImg || '',
                    "url": "/plugins/" + files,
                    "tab": jsonconfig.pluginTab || []
                }
                var plugindata = pluginHandle.pluginsService(router, files);
                io.emit("buildPlugin", plugindata)
                res.send({"statusCode": 200, "code": '000', "message": "插件" + files + "安装完成"});
              } else {
                //判断插件是否已经初始化,如果没有初始化则初始化
                var initexist = fs.existsSync(installpluginPath + files);
                if (!initexist) {
                  fs.mkdirSync(installpluginPath + files);
                  fs.copyFileSync('./views/index.pug', installpluginPath + files + '/index.pug');
                  var indexexist = fs.existsSync(pluginPath + files + '/index.html');
                  if (indexexist) {
                      fs.copyFileSync(pluginPath + files + '/index.html', installpluginPath + files + '/index.html');
                      fs.unlinkSync(pluginPath + files + '/index.html')
                      var plugindata = pluginHandle.pluginsService(router, files);
                      io.emit("buildPlugin", plugindata)
                      res.send({"statusCode": 200, "code": '000', "message": "插件" + files + "安装完成"});
                      console.log('插件：' + files + '初始化成功');
                  } else {
                      fs.copyFileSync('./views/index.html', installpluginPath + files + '/index.html');
                      var plugindata = pluginHandle.pluginsService(router, files);
                      io.emit("buildPlugin", plugindata)
                      res.send({"statusCode": 200, "code": '000', "message": "插件" + files + "安装完成"});
                      console.log('插件：' + files + '初始化成功');
                  }
                } else {
                    res.send({"statusCode": 200, "code": '000', "message": "插件" + files + "已经安装，请不要重复安装"});
                }
              }
            } else {
                res.send({"statusCode": 500, "code": '0001', "message": "插件" + files + "文件不存在"});
            }
          } else {
              res.send({"statusCode": 500, "code": '0001', "message": "插件" + files + "初始化目录不正确"});
          }
        } catch (e) {
            res.send({"statusCode": 500, "code": '0001', "message": "插件" + files + "初始化文件不存在"});
        }
      }
    });
};
