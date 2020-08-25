const gulp = require('gulp')
const { series } = require('gulp')

const htmlmin = require('gulp-htmlmin')

function minifyHTML() {
    return gulp.src('src/index.php')
        .pipe(htmlmin({
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest('public'))
}

gulp.task('minifyHTML', minifyHTML)

module.exports.default = series(minifyHTML)