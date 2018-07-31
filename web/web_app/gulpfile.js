"use strict";

const gulp = require('gulp');
const eslint = require('gulp-eslint');

const config = {
    paths: {
        js: './src/**/*.js'
    }
};

gulp.task('lint', () => {
    return gulp.src(['./src/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.js, ['lint']);
});

gulp.task('default', ['lint', 'watch']);