const dartSass = require('sass')
const gulpSass = require('gulp-sass')
const sass = gulpSass(dartSass)

module.exports = sassToCss = () => {
  return app.gulp
    .src('src/assets/sass/*.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(app.gulp.dest('src/assets/css'))
}
