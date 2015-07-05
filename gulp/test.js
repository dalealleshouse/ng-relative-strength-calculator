var gulp = require('gulp');
var seq = require('run-sequence');
var del = require('del');
var karma = require('karma').server;

var $ = require('gulp-load-plugins')();

module.exports = function (options) {
    gulp.task('ts-test-compile', function() {
        var tsResult = gulp.src(options.allTsBlob)
            .pipe($.typescript({
                noImplicitAny: true,
                target: 'ES5'
            })).on('error', options.errorHandler('TypeScript'));

        return tsResult.js.pipe(gulp.dest(options.tmp));
    });

    gulp.task('clean-test', function() {
        del('.tmp/*.js');
    });

    gulp.task('karma', function(cb) {
        karma.start({
            configFile: __dirname + '/../karma.conf.js',
            singleRun: false
        }, cb);
    });

    gulp.task('test-watch', function() {
        $.watch(options.specBlob, function(e) {
            gulp.start('test-build');
        });
    });

    gulp.task('test-build', function() {
        seq(['clean-test', 'ts-lint'], 'ts-test-compile');
    });

    gulp.task('test', function (cb) {
        seq('tsd:install', 'test-build', 'test-watch', 'karma', cb);
    });
}