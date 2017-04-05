var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');
var notify = require('gulp-notify');

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(plumber())
        .pipe(sass()
            .on("error", notify.onError({
                  title: "Sass Error",
                  message: "Error: <%= error.message %>"
              }))
      )
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

//default gulp task
gulp.task('default', ['sass', 'compress', 'browser-sync'], function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
    gulp.watch(['src/javascript/*', 'src/javascript/**/*'], ['compress']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// BrowserSync server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
// JS uglify
gulp.task('compress', function() {
    return gulp.src('src/js/main.js')
        .pipe(uglify())
        .on("error", notify.onError( {
          title: "JS Error",
          message: "Error: <%= error.message %>"
        }))
        .pipe(gulp.dest('assets/js/'));
});
