let imagemin = false
module.exports = min = async () => {
  imagemin = await import('gulp-imagemin')
  if (imagemin) {
    return app.gulp
      .src('src/assets/img/*')
      .pipe(imagemin.default())
      .pipe(app.gulp.dest('dist/assets/img/'))
  }
}
