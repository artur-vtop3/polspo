module.exports = copy = () => {
  return app.gulp
    .src('src/assets/fonts/**/*.*')
    .pipe(app.gulp.dest('./dist/assets/fonts'))
}
