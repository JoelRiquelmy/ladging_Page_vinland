const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// Task de scripts
function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

// Task de styles
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

// Task de watch
function watchFiles() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
}

// Exportando as tasks
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watchFiles;

// Quando rodar apenas "gulp" no terminal:
exports.default = gulp.parallel(styles, scripts, watchFiles);