var gulp = require('gulp');
var seq = require('run-sequence');
var del = require('del');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
    gulp.task('clean', function(cb) {
        del(
            [
                options.dist + '/**/',
                options.tmp + '/**/'
            ],
            cb);
    });

    gulp.task('minify', function() {
        return gulp.src(options.dist + '/' + options.outputFile)
            .pipe($.concat(options.minOutputFile))
            .pipe($.uglify())
            .pipe(gulp.dest(options.dist));
    });

    gulp.task('build', function(cb) {
        seq('clean', 'tsd:install', 'ts-lint', 'ts-compile', 'minify', cb);
    });
}