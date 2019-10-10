var fs = require('fs')
var pluginPath = './public/plugins'
var pluginls = []
var pluginlsobj = {}
var syncRequest = require('./syncRequestHandle.js')
var kernelUrl = process.env.DISCOVERY_CLUSTER || 'http://qloudkernel.service.sd'
var serviceName = process.env.SERVICE_NAME || 'qlouddemo'
function pluginsService(servers, file) {
  var st = fs.statSync(pluginPath + '/' + file)
  var newplugin = {}
  if (!st.isFile()) {
    var jsonexist = fs.existsSync(pluginPath + '/' + file + '/assets/config.json')
    if (jsonexist) {
      data = JSON.parse(fs.readFileSync(pluginPath + '/' + file + '/assets/config.json', 'utf-8'))
      var initexist = fs.existsSync('./views/plugins/' + file)
      if (data.pluginName && initexist) {
        newplugin = {
          default: !!data.default,
          name: data.pluginName,
          icon: data.pluginIcon || '',
          order: data.pluginOrder || 0,
          abbr: data.pluginAbbr || '',
          img: '/plugins/' + file + data.pluginImg || '',
          url: '/plugins/' + file,
          tab: data.pluginTab || []
        }
        sortByKey(pluginls, newplugin)
      }
    }
  }
  return newplugin
}

// 传入数组重新排序,排序功能（arr多维数组，key多维数组键名）
function sortByKey(arr, item) {
  console.log(parseInt(item['order']) - 1)
  if (!!parseInt(item['order'])) {
    arr.splice(parseInt(item['order']) - 1, 0, item)
  } else {
    arr.splice(arr.length, 0, item)
  }
  return arr
}
function getPluginls() {
  return pluginls
}
function setPliginls(list) {
  pluginls = list
}
//插件列表
exports.getPluginls = getPluginls
//修改列表
//插件列表
exports.setPliginls = setPliginls
//获取插件列表信息
exports.pluginsService = pluginsService
//插件初始化
exports.initPlugin = function initPlugin(router) {
  var files = fs.readdirSync(pluginPath)
  var initPlugin = []
  for (var i = 0; i < files.length; i++) {
    var file = files[i]
    var st = fs.statSync(pluginPath + '/' + file)
    if (!st.isFile()) {
      //判断插件的配置json是否存在
      var jsonexist = fs.existsSync(pluginPath + '/' + file + '/assets/config.json')
      if (jsonexist) {
        var jsonconfig = fs.readFileSync(pluginPath + '/' + file + '/assets/config.json', { encoding: 'utf8' })
        jsonconfig = JSON.parse(jsonconfig)
        if (jsonconfig.service && jsonconfig.service.name && jsonconfig.service.schema) {
          if (serviceName.indexOf(jsonconfig.service.name) === -1) {
            // 其它服务的插件获取插件所在服务的ingress地址   服务自身的插件不获取
            var pluName = jsonconfig.service.name
            if (process.env[pluName.toUpperCase() + 'NAMESPACE']) {
              pluName += '.' + process.env[pluName.toUpperCase() + 'NAMESPACE']
            }
            console.log('请求插件', jsonconfig.service.name, kernelUrl + '/discovery/services/' + pluName)
            var resData = syncRequest('GET', kernelUrl + '/discovery/services/' + pluName, { json: true })
            if (resData.statusCode == 200) {
              const newdata = JSON.parse(resData.getBody('utf8'))
              if (newdata.length > 0 && newdata[0].ServiceAddress) {
                var name = jsonconfig.service.name.toUpperCase() + 'BACKENDURL'
                var url = newdata[0].ServiceAddress.includes('http')
                  ? newdata[0].ServiceAddress
                  : jsonconfig.service.schema + '://' + newdata[0].ServiceAddress
                if (url[url.length - 1] == '/') {
                  url = url.substring(0, url.length - 1)
                }
                process.env[name] = url
              }
            } else {
              logger.error(
                '请求的url为：' +
                  kernelUrl +
                  '/discovery/services/' +
                  jsonconfig.service.name +
                  '，错误处理中间捕获异常:GET request Status is not Fine!!'
              )
            }
          }
        }
        if (jsonconfig.type && jsonconfig.type == 'iframe') {
          newplugin = {
            name: jsonconfig.pluginName,
            icon: jsonconfig.pluginIcon || '',
            abbr: jsonconfig.pluginAbbr || '',
            order: jsonconfig.pluginOrder || 0,
            img: '/plugins/' + file + jsonconfig.pluginImg || '',
            url: '/plugins/' + file,
            tab: jsonconfig.pluginTab || []
          }
          sortByKey(pluginls, newplugin)
        } else {
          //判断插件是否已经初始化,如果没有初始化则初始化
          var initexist = fs.existsSync('./views/plugins/' + file)
          // 创建插件目录
          if (!fs.existsSync('./views/plugins')) {
            fs.mkdirSync('./views/plugins')
          }

          if (!initexist) {
            fs.mkdirSync('./views/plugins/' + file)
            fs.copyFileSync('./views/index.pug', './views/plugins/' + file + '/index.pug')
            var indexexist = fs.existsSync(pluginPath + '/' + file + '/index.html')
            if (indexexist) {
              fs.copyFileSync(pluginPath + '/' + file + '/index.html', './views/plugins/' + file + '/index.html')
              fs.unlinkSync(pluginPath + '/' + file + '/index.html')
              initPlugin.push(file)
              console.log('插件：' + file + '初始化成功')
            } else {
              fs.copyFileSync('./views/index.html', './views/plugins/' + file + '/index.html')
              initPlugin.push(file)
              console.log('插件：' + file + '初始化成功')
            }
          } else {
          }
        }
      } else {
      }
    }
  }
  for (var i = 0; i < initPlugin.length; i++) {
    pluginsService(router, initPlugin[i])
  }

  for (var i = 0; i < pluginls.length; i++) {
    if (typeof pluginls[i] !== 'object') {
      pluginls.splice(i, 1)
    }
  }
  console.log(pluginls)
}
