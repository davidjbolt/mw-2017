// include gulp
var gulp = require('gulp');
// include gulp-sass plugin
var sass = require('gulp-sass');
// first gulp task, completely useless (=
gulp.task('holla', function() {
  console.log('YO');
});
// gulp sass function, compiler, also useless
gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});
// watch for any change in these folders and run task
gulp.task('default', function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
});
