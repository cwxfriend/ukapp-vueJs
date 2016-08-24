'use strict';

var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    rename = require('gulp-rename'),
    del = require('del'),
    ukwatch = require('gulp-ucloudlink-watch');

var config = require('./webpack.config');

/** 
 *  清理生产目录文件
 */
gulp.task('clean', function(cb) {
    del(['./dist/*.js','./dist/*.css','./dist/*.map']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        cb();
    });
});


/** 
 *  执行webpack打包
 */
gulp.task('webpack',['clean'], function(cb) {
    webpack(config, cb)
});

/** 
 *  压缩css文件
 */
gulp.task('style',function() {
    gulp.src('./dist/style.css')
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'));
});

/** 
 *  压缩js文件
 */
gulp.task('script',function(){
    gulp.src('./dist/*.js')
    // .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['webpack'], function() {
    console.log(process.env.NODE_ENV);
    gulp.start('style','script')
});

gulp.task('lanBuild',function() {
    var opt = {
        lanPath:'./i18n/',//多语言文件夹
        bulidPath:'./dist/',
        lanOutputPath:'./dist/i18n'//多语言输出文件夹，一点要配置正确，配置在静态代码生成的环境内，否则语言无法拆分！
    };
    ukwatch.lan(opt,gulp);
});