var gulp = require('gulp'),
    less = require('gulp-less'),
    del = require('del'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename");    

gulp.task('default', ['less']);

gulp.task('less', function () {
    return gulp.src(['*.less', 'src/*.less'])
        .pipe(less())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions', '> 1%', 'ie 9'] }) ]))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('clear', function () {
    del(['./build'])
});

gulp.task('watch', function () {
    gulp.watch('./*.less', ['less']);
});