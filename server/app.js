var express = require('express')
var createError = require('http-errors')
var title = 'qloudcrm'
var logo = '/images/logo.png'
var router = express.Router()
var path = require('path')
var cookieParser = require('cookie-parser')
var fs = require('fs')
var log4js = require('log4js')
var expressSession = require('express-session')
var gaze = require('gaze')
var log4jsjson = require('./log4js.json')
var routes = require('./routes/routes.js')
// 代理插件
var proxy = require('http-proxy-middleware')
var cors = require('cors')
var bodyParser = require('body-parser')

var getBaseConfig = require('./config/baseConfig.js')
var pluginPath = './public/plugins'
const passport = require('passport')
const flash = require('connect-flash')
const request = require('./util/requestHandle.js')

const ssourl = process.env.SSO_URL || 'https://qmsauthn.service.sd:443'
const appUrl = process.env.SERVICE_INGRESS ? 'http://' + process.env.SERVICE_INGRESS : 'http://qlouddemo.service.sd'
const OIDCStrategy = require('passport-openidconnect').Strategy
var serviceName = process.env.SERVICE_NAME || 'qlouddemo'
const pluginHandle = require('./util/pluginHandle.js')

const baseConfig = getBaseConfig()

console.log('服务地址:', baseConfig.server)
//配置log日志信息
//判断日志存储路径是否存在
var jsonexist = fs.existsSync(log4jsjson.appenders.dateFile.filename)
if (jsonexist) {
} else {
  log4jsjson.appenders.dateFile.filename = './logs/log'
}
log4js.configure(log4jsjson)
var logger = log4js.getLogger('日志信息')
var httpServer
//创建socket.io
createHttpSocket = function createHttpSocket(httpsocket) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  httpsocket.post('/v1/websocket/:publisher', function(req, res) {
    io.sockets.emit(req.params.publisher, req.body)
    res.send({ code: '000', success: '成功' })
  })
}
//创建express服务
createServer = function createServer() {
  var server = express()

  server.use(cors())
  // 设置模板位置
  server.set('views', path.join(__dirname, 'views'))
  server.set('view engine', 'pug')
  //创建socket.io
  httpServer = require('http').Server(server)
  var io = require('socket.io')(httpServer)
  createHttpSocket(router)
  // 服务端监听连接状态：io的connection事件表示客户端与服务端成功建立连接，它接收一个回调函数，回调函数会接收一个socket参数。
  io.on('connection', socket => {
    //console.log('=================建立连接==============');
    socket.emit('serverMessage', '与服务器建立连接')
    // 监听断开连接状态：socket的disconnect事件表示客户端与服务端断开连接
    socket.on('disconnect', () => {
      //console.log('=================断开连接==============');
    })
  })

  //设置静态文件位置
  server.use(express.static(path.join(__dirname, 'public')))
  //设置日志级别
  server.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }))
  //设置sso
  passport.use(
    'oidc',
    new OIDCStrategy(
      {
        userInfoURL: ssourl + '/oidc/profile',
        authorizationURL: ssourl + '/oidc/authorize',
        tokenURL: ssourl + '/oidc/accessToken',
        clientID: serviceName + 'ClientID',
        clientSecret: serviceName + 'A5674123kdfasdfD',
        issuer: ssourl + '/oidc',
        callbackURL: appUrl + '/callback/oidc'
      },
      (iss, sub, profile, jwtClaims, accessToken, refreshToken, params, cb) => {
        //  console.log('iss======', iss)
        //console.log('profile======', profile)
        //  console.log('jwtClaims======', jwtClaims)
        //  console.log('accessToken======', accessToken)
        //  console.log('refreshToken======', refreshToken)
        //  console.log('params======', params)
        //  //sub 即为用户id
        // console.log('sub', sub)
        const user = { user: sub, token: accessToken, profile: profile }
        if (profile['_json'] && profile['_json']['attributes'] && profile['_json']['attributes']['photo']) {
          var photo = profile['_json']['attributes']['photo']
          if (photo.includes('http')) {
            user.photo = photo
          } else {
            user.photo = 'http://' + process.env.MINIO_ADD + '/qloudauth/' + photo
          }
        }
        return cb(null, user)
      }
    )
  )
  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    done(null, user)
  })
  //设置缓存信息
  server.use(cookieParser())
  server.use(
    expressSession({
      name: 'qloud',
      resave: false, // don't save session if unmodified
      saveUninitialized: true, // don't create session until something stored
      secret: 'mdfkldfgkl&'
    })
  )
  server.use(passport.initialize())
  server.use(passport.session())
  server.use(flash())
  //设置禁用缓存
  server.use(function(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.header('Expires', '-1')
    res.header('Pragma', 'no-cache')
    //允许跨域
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    //对指定的路劲进行登录验证
    var filterPaths = []
    if (req.url) {
      for (var i = 0; i < filterPaths.length; i++) {
        if (req.url.indexOf(filterPaths[i]) > -1) {
          if (req.session.user) {
            // 利用闭包的特性获取最新的router对象，避免app.use缓存router对象
            //通过这种方式取代了express的next()传递,将express()和express.Router()相关联起来
            router(req, res, next)
          } else {
            res.send({ statusCode: 200, code: 'unlogin', message: '未登录,请先登录' })
          }
        } else {
          // 利用闭包的特性获取最新的router对象，避免app.use缓存router对象
          router(req, res, next)
        }
      }
      if (filterPaths.length == 0) {
        router(req, res, next)
      }
    } else {
      // 利用闭包的特性获取最新的router对象，避免app.use缓存router对象
      router(req, res, next)
    }
  })
  var files = fs.readdirSync(pluginPath)
  for (var i = 0; i < files.length; i++) {
    pluginHandle.pluginsService(router, files[i])
  }
  pluginHandle.initPlugin(router)
  router.get('/login/oidc', passport.authenticate('oidc', { failureRedirect: '/login/oidc', successRedirect: '/' }))
  router.get('/callback/oidc', passport.authenticate('oidc', { failureRedirect: '/login/oidc', successRedirect: '/' }))
  router.post('/api/sso/logout', function(req, res) {
    if (req.body.logoutRequest) {
      var xml2jsOptions = { explicitArray: false, explicitRoot: true, charkey: '_' }
      require('xml2js').parseString(req.body.logoutRequest, xml2jsOptions, function(err1, json) {
        if (!err1) {
          var un = json['samlp:LogoutRequest']['saml:NameID']['_']
          io.sockets.emit('userlogout', un)
          req.logout() //TODO bywushaohua添加清楚passport的缓存信息都要执行这个方法，因为一个是app的一个是router的，其中的sessionid是不一样的
          res.send({ code: '000', success: '成功' })
        } else {
          res.send({ statusCode: 500, data: '解析logoutRequest的xml出错' })
        }
      })
    } else {
      res.send({ statusCode: 500, data: '未获取到logoutRequest' })
    }
  })
  router.get('/consule/check', function(res, req) {
    req.send({ msg: 'im ok' })
  })
  var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login/oidc')
  }
  router.get('/logout', function(req, res) {
    req.logout()
    res.redirect(`${ssourl}/logout?service=${appUrl}/login/oidc`)
  })
  //首页
  router.get('/', function(req, res, next) {
    var pluginls = pluginHandle.getPluginls()
    var defaultPlugin = pluginls.find(x => x.default)
    if (defaultPlugin) {
      return res.redirect(defaultPlugin.url)
    }

    var photo = req.user && req.user.photo ? req.user.photo : '/images/profile/profile.svg'
    var clientConfig = {
      user: req.user,
      menu: {
        left: '',
        icon: ''
      }
    }
    if (req.query.status == 'true') {
      clientConfig.menu.left = '54px'
      clientConfig.menu.icon = 'fa-chevron-circle-right'
    } else {
      clientConfig.menu.left = '200px'
      clientConfig.menu.icon = 'fa-chevron-circle-left'
    }

    for (var i = 0; i < pluginls.length; i++) {
      if (pluginls[i].url == '/' || pluginls[i].url == '') {
        pluginls[i].class = 'qloud-al-sidebar-list-item selected'
      } else {
        pluginls[i].class = 'qloud-al-sidebar-list-item'
      }
    }
    res.render('index', {
      title: title,
      logoUrl: logo,
      logName: title,
      serverConfig: {
        url: '',
        name: ''
      },
      clientConfig: clientConfig,
      userLogo: photo,
      pluginls: pluginls,
      tabls: []
    })
  })
  //其他插件页
  router.get('/plugins/:file', function(req, res, next) {
    var photo = req.user && req.user.photo ? req.user.photo : '/images/profile/profile.svg'
    var clientConfig = {
      user: req.user,
      menu: {
        left: '',
        icon: ''
      }
    }
    if (req.query.status == 'true') {
      clientConfig.menu.left = '54px'
      clientConfig.menu.icon = 'fa-chevron-circle-right'
    } else {
      clientConfig.menu.left = '200px'
      clientConfig.menu.icon = 'fa-chevron-circle-left'
    }
    try {
      var newfile = decodeURIComponent(req.params.file)
      var data = JSON.parse(fs.readFileSync(pluginPath + '/' + newfile + '/assets/config.json', 'utf-8'))
      var pluginls = pluginHandle.getPluginls()
      var newurl = decodeURIComponent(req.url).split('?')[0]

      //根据插件config,判断是否需要授权，需要授权则去OSS领票
      /*if(data.requireAuth){
        isAuthenticated(req,res,next);
      }*/
      for (var i = 0; i < pluginls.length; i++) {
        if (pluginls[i].url == newurl || pluginls[i].url + '/' == newurl) {
          pluginls[i].class = 'qloud-al-sidebar-list-item selected'
        } else {
          pluginls[i].class = 'qloud-al-sidebar-list-item'
        }
      }
      var serverConfig = {
        url: '',
        name: ''
      }
      //判断此插件的地址是否需要从kernel服务器获取
      if (data.service && data.service.name && data.service.schema) {
        serverConfig.name = data.service.name
        var name = data.service.name.toUpperCase() + 'BACKENDURL'
        serverConfig.url = process.env[name]
      }
      if (data.type && data.type == 'iframe') {
        if (serverConfig.url) {
          data.pluginPath = serverConfig.url
        }
        if (req.query) {
          data.pluginTab.forEach(item => {
            if (item.code == req.query.code) {
              data.pluginPath = data.pluginPath + item.url
            }
          })
        }
        res.render('embedindex', {
          title: title,
          logoUrl: logo,
          logName: title,
          userLogo: photo,
          url: data.pluginPath,
          pluginls: pluginls,
          clientConfig: clientConfig,
          tabls: data.pluginTab || []
        })
      } else {
        res.render('plugins/' + newfile + '/index', {
          title: title,
          logoUrl: logo,
          logName: title,
          userLogo: photo,
          pluginls: pluginls,
          serverConfig: serverConfig,
          clientConfig: clientConfig,
          tabls: data.pluginTab || []
        })
      }
    } catch (error) {
      res.render('error')
    }
  })

  var host = /^https?:\/\/[\w-.]+(:\d+)?/i.exec(baseConfig.server)[0]
  var url = (baseConfig.server.split(host).find(x => x) || '').replace(/^(.+)\/$/, '$1')

  // 设置代理
  server.use(
    '/api',
    proxy({
      target: host + url,
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      changeOrigin: true,
      pathRewrite: res => {
        return res.replace(/^\/api/g, '')
      },
      headers: {
        Connection: 'keep-alive'
      }
    })
  )

  // 设置获取请求信息为json格式
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  // server.use('/api', function(req, res, next) {
  //   logger.info()
  //   logger.info('------start-proxy-----')
  //   logger.info('target url: ' + host + url + req.url)
  //   logger.info('request method: ' + req.method)
  //   var options = {
  //     url: host + url + req.url,
  //     method: req.method,
  //     json: true,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   if (['POST'].includes(req.method)) {
  //     options.body = req.body
  //   }

  //   function callback(error, response, data) {
  //     res.send(response.body)
  //   }
  //   request(options, callback)
  // })

  // 错误处理中间件
  server.use(function(err, req, res, next) {
    console.log(err.status)
    logger.error('请求的url为：' + req.url + '，错误处理中间捕获异常', err.message)
    res.send({ statusCode: err.code || 500, code: '100000000000000', message: '内部错误,请稍后重试' })
  })

  //监听文件的变化热部署后台接口
  //   gaze('*.js',{cwd:'./service'}, function(err, watcher) {
  //     // On file changed/add/delete
  //     this.on('all', function(event, filepath) {
  //         try {
  //             //router重新初始化
  //             router=express.Router();
  //             createHttpSocket(router);
  //             routes.attachHandlers(router);
  //             logger.info("nodejs服务重新加载，文件操作类型："+event+",文件地址" + filepath);
  //         } catch (ex) {
  //             logger.error('Error: %s', ex);
  //         }
  //     });
  // });

  routes.attachHandlers(router, io)
  server.get('*', function(req, res, next) {
    if (req.url != '/v1/installPlugin' && !req.url.includes('/v1/uninstallPlugin')) {
      res.render('error')
    } else {
      next()
    }
  })
  return server
}
var server = createServer()
var port = Number(process.env.PORT || baseConfig.port)

httpServer.listen(port, function() {
  logger.info('启动端口:' + port)
})
//对抛出异常统一处理
process.on('uncaughtException', function(err) {
  logger.error('Error: %s', err.message)
})
