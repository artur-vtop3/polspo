const postcss = require('gulp-postcss')
const browserSync = require('browser-sync')
module.exports = postCss = () => {
  return (
    app.gulp
      .src('src/assets/css/*.css')
      .pipe(postcss())
      // .pipe(postcss([flexGapPolyfill()]))
      .pipe(app.gulp.dest('./dist/assets/css'))
      .pipe(browserSync.reload({ stream: true }))
  )
}
