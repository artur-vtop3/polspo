const babel = require('gulp-babel')
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

module.exports = babelTask = () => {
  return app.gulp
    .src('src/assets/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write('/sourcemap'))
    .pipe(app.gulp.dest('./dist/assets/js'))
    .pipe(browserSync.stream())
}
