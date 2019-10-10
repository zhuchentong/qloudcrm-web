const defaultServer = 'http://qloudcrmserver.pditdap.service.sd'
const defaultPort = '80'

module.exports = function() {
  return {
    port: '80',
    topic: 'Qloudbus.Configuration',
    server: `${process.env.SERVER_URL || defaultServer}:${process.env.SERVER_PORT || defaultPort}`
  }
}
