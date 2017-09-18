//载入核心包
const gulp = require('gulp')

//定义一个任务
//第一个参数任务名，第二个参数是任务执行体
gulp.task('dest',function(){
    //获取文件
    gulp.src('./src/**/*.*')
      .pipe(gulp.dest('dist/'))
})

//default为gulp默认执行的任务

gulp.task('default',function(){
    //获取文件
    gulp.src('./src/**/*.*')
      .pipe(gulp.dest('dist/'))
})