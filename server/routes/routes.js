var fs = require("fs");
var path = "./service";

//处理express相关信息
  exports.attachHandlers = function attachHandlers(server,io) {
    function serverHandlers(path){
      fs.readdir(path, function(err,files){
        if(err){
          console.log("error:\n"+err);
          return;
        }
        files.forEach(function(file){
          fs.stat(path+"/"+file,function(err,stat){
            if(err){
              console.log(err);
              return;
            }
            if(stat.isDirectory()){
                  serverHandlers(path+"/"+file);
            }else{
                if(file.indexOf('.js')>-1&&file!='.DS_Store'&&file!='menu.json'){
                  cleanCache(require.resolve("."+path+"/"+file));    //清除该路径模块的缓存
                  require("."+path+"/"+file)(server,io);
                }
            }
          });
        });
      });
    }
    //清除旧的require缓存
    function cleanCache(modulePath) {
      var module = require.cache[modulePath];
      if (!module) {
        return;
      }

      if (module.parent) {
        module.parent.children.splice(module.parent.children.indexOf(module), 1);
      }
      require.cache[modulePath] = null;
    }
    serverHandlers(path);
  };
