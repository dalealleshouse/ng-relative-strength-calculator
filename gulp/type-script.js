var gulp = require('gulp');
var merge = require('merge2');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
    gulp.task('ts-lint', function() {
        return gulp.src(options.allTsBlob)
            .pipe($.tslint())
            .pipe($.tslint.report('verbose'));
    });

    gulp.task('ts-compile', function() {
        var tsResult = gulp.src(options.codeBlob)
            .pipe($.typescript({
                declarationFiles: true,
                noImplicitAny: true,
                target: 'ES5',
                out: options.outputFile
            })).on('error', options.errorHandler('TypeScript'));

        return merge([
            tsResult.dts.pipe(gulp.dest(options.dist)),
            tsResult.js
                .pipe($.ngAnnotate())
                .pipe(gulp.dest(options.dist))
        ]);
    });
}