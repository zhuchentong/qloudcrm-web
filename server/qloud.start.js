const getBaseConfig = require('./config/baseConfig.js')
const webstomp = require('webstomp-client')
const request = require('./util/requestHandle.js')
const async = require('async')
const execFile = require('child_process').execFile
const ws = require('ws')
const axios = require('axios')
const fs = require('fs')
const uuid = require('node-uuid')

const path = require('path')
const baseConfig = getBaseConfig()
const options = { debug: false }
const QUQU = baseConfig.topic

const DEFAULT_SERVICE_CONFIG = {
  SERVICE_NAME: 'qloudcrmui',
  SERVICE_INGRESS: 'qloudcrmui.pditdap.service.sd',
  SERVICE_CLUSTER: 'qloudcrmui.default',
  ALGO_SERVER_NAME: 'qloudcrmserver',
  DISCOVERY_CLUSTER: 'qloudkernel.pditdap.service.sd',
  DISCOVERY_CLUSTER_PORT: '8888'
}

const SERVICE_CONFIG = {
  SERVICE_NAME: process.env.SERVICE_NAME || DEFAULT_SERVICE_CONFIG.SERVICE_NAME,
  SERVICE_INGRESS: process.env.SERVICE_INGRESS || DEFAULT_SERVICE_CONFIG.SERVICE_INGRESS,
  SERVICE_CLUSTER: process.env.SERVICE_CLUSTER || DEFAULT_SERVICE_CONFIG.SERVICE_CLUSTER,
  DISCOVERY_CLUSTER: process.env.DISCOVERY_CLUSTER || DEFAULT_SERVICE_CONFIG.DISCOVERY_CLUSTER,
  DISCOVERY_CLUSTER_PORT: process.env.DISCOVERY_CLUSTER_PORT || DEFAULT_SERVICE_CONFIG.DISCOVERY_CLUSTER_PORT,
  ALGO_SERVER_NAME: process.env.ALGO_SERVER_NAME || DEFAULT_SERVICE_CONFIG.ALGO_SERVER_NAME
}

var uri = 'http://' + SERVICE_CONFIG.DISCOVERY_CLUSTER + ':' + SERVICE_CONFIG.DISCOVERY_CLUSTER_PORT

console.log('ENV CONFIG:', JSON.stringify(SERVICE_CONFIG))

/**
 * 拉取服务端配置
 */
function pullServerConfig() {
  return new Promise((reslove, reject) => {
    axios({
      method: 'get',
      url: uri + '/discovery/services/' + SERVICE_CONFIG.ALGO_SERVER_NAME
    })
      .then(({ data }) => {
        if (!data || !data.length) {
          throw new Error('获取服务配置异常')
        }

        const target = data[0]

        if (target.ServiceMeta && target.ServiceMeta.LocalHost && target.ServiceMeta.LocalPort) {
          process.env.SERVER_URL = target.ServiceMeta.Schema + '://' + target.ServiceName
          process.env.SERVER_PORT = target.ServiceMeta.LocalPort
          reslove()
        } else {
          throw new Error('获取服务配置异常')
        }

        console.info('获取服务：ALGOSERVICE-URL配置信息成功!')
      })
      .catch(ex => {
        reject(ex)
      })
  })
}

/**
 * 设置Consule配置
 */
function setConsuleConfig() {
  return new Promise(async (reslove, reject) => {
    await axios({
      url: uri + '/discovery/services/' + SERVICE_CONFIG.SERVICE_NAME,
      method: 'get'
    }).then(({ data }) => {
      console.log('当前服务注册信息', data)
    })

    await axios({
      method: 'post',
      url: uri + '/discovery/services',
      data: {
        ID: uuid.v1(),
        Name: SERVICE_CONFIG.SERVICE_NAME,
        Address: SERVICE_CONFIG.SERVICE_INGRESS,
        Port: 443,
        Tags: [SERVICE_CONFIG.SERVICE_NAME],
        Check: {
          ID: `${SERVICE_CONFIG.SERVICE_NAME}Check` + uuid.v1(),
          Name: `${SERVICE_CONFIG.SERVICE_NAME}NodeCheck`,
          HTTP: 'http://' + SERVICE_CONFIG.SERVICE_CLUSTER + ':80/consule/check',
          Interval: '30s',
          Timeout: '5s',
          DeregisterCriticalServiceAfter: '3m',
          TLSSkipVerify: false
        },
        Meta: {
          LocalHost: SERVICE_CONFIG.SERVICE_CLUSTER,
          Schema: 'http',
          LocalPort: '80'
        }
      }
    })
      .then(data => {
        console.info('注册服务：ALGOUI配置服务信息成功!')
        console.info('注册服务结果:', data)
      })
      .catch(ex => {
        reject(ex)
      })
  })
}

// 启动服务
Promise.all([pullServerConfig()])
  .then(() => {
    setTimeout(() => {
      require('./app.js')
    }, 1000)
  })
  .then(() => {
    // 配置Consule信息
    setConsuleConfig()
  })
  .catch(ex => {
    console.error('执行步骤的错误：', ex)
  })
