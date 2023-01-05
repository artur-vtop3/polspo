const gulp = require('gulp')

global.app = {
  gulp,
}

const copy = require('./gulp/tasks/copy.js')
const min = require('./gulp/tasks/imagemin.js')
const clean = require('./gulp/tasks/clean.js')
const sync = require('./gulp/tasks/sync.js')
const sass = require('./gulp/tasks/sass.js')
const postCss = require('./gulp/tasks/post.js')
const pugToHtml = require('./gulp/tasks/pug.js')
const babelTask = require('./gulp/tasks/babel.js')

function watcher() {
  gulp.watch('src/assets/fonts', copy)
  gulp.watch('src/assets/img', min)
  gulp.watch('src/**/*.pug', gulp.series(pugToHtml, postCss))
  gulp.watch('src/assets/sass/*.sass', sass)
  gulp.watch('src/assets/css/*.css', postCss)
  gulp.watch('src/assets/js/*.js', babelTask)
}

const dev = gulp.series(
  clean,
  copy,
  min,
  pugToHtml,
  sass,
  postCss,
  babelTask,
  gulp.parallel(sync, watcher)
)

gulp.task('default', dev)
