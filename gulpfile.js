/// <binding BeforeBuild='build' Clean='clean' ProjectOpened='test' />
(function() {
    'use strict';
    
    var gulp = require('gulp');
    var gutil = require('gulp-util');
    var wrench = require('wrench');

    var options = {
        src: 'src',
        dist: 'dist',
        tmp: '.tmp',
        allTsBlob: 'src/**/*.ts',
        codeBlob: ['src/**/*.ts', '!src/**/*.spec.ts'],
        specBlob: 'src/**/*.spec.ts',
        outputFile: 'ng-relative-strength-calculator.js',
        minOutputFile: 'ng-relative-strength-calculator.min.js',
        errorHandler: function (title) {
            return function (err) {
                gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
                this.emit('end');
            };
        }
    };

    wrench.readdirSyncRecursive('./gulp').filter(function (file) {
        return (/\.(js|coffee)$/i).test(file);
    }).map(function (file) {
        require('./gulp/' + file)(options);
    });

    gulp.task('default', ['build']);
})();