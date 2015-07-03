var gulp = require('gulp');
var seq = require('run-sequence');
var del = require('del');

var $ = require('gulp-load-plugins')();

module.exports = function (options) {
    gulp.task('test-code-compile', function() {
        var tsResult = gulp.src(options.allTsBlob)
            .pipe($.typescript({
                noImplicitAny: true,
                target: 'ES5'
            })).on('error', options.errorHandler('TypeScript'));

        return tsResult.js.pipe(gulp.dest(options.tmp));
    });

    gulp.task('test', function (cb) {
        seq('clean', 'tsd:install', ['test-code-compile'], cb);
    });
}