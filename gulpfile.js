var exec = require('child_process').exec
var fs = require('fs')
var path = require('path')
var del = require('del')
var gulp = require('gulp')
var child_process = require('child_process')
var PROJECT_DIR = 'projects'

/**
 * 执行命令
 * @param {string} cmd
 */
function execPromise(cmd) {
  return new Promise((resolve, reject) => {
    console.log('开始打包: ' + cmd)
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error)
      }
      console.log('打包完成: ' + cmd)
      resolve(stdout ? stdout : stderr)
    })
  })
}

/**
 * 获取项目列表
 */
function getProjects() {
  var dirs = fs.readdirSync(PROJECT_DIR)
  return dirs.filter(dir => {
    var info = fs.statSync(PROJECT_DIR + '/' + dir)
    return info.isDirectory()
  })
}
// 执行清理命令
gulp.task('clean', () => del(['./dist']), del(['./server/public/plugins/*'], del(['./server/views/plugins/*'])))

// 执行编译命令
gulp.task('compile', function(done) {
  Promise.all(
    getProjects().map(project => {
      const cmd = ['ng', 'build', project, '--prod', '--aot=false', '--build-optimizer=false'].join(' ')
      return execPromise(cmd)
    })
  ).then(() => {
    console.log('所有插件打包完成')
    done()
  })
})

// 执行安装插件命令
gulp.task('install', function() {
  return gulp.src('./dist/**/*').pipe(gulp.dest('./server/public/plugins'))
})

gulp.task('build', gulp.series('clean', 'compile', 'install'))
