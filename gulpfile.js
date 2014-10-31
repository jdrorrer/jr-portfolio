
// Plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');


// Styles
gulp.task('styles', function() {
  return gulp.src('stylesheets/*.css')
    // .pipe(sass({ style: 'expanded' }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['js/magnific-popup.js', 'js/app.js'])
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js'], cb)
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function() {
 
  // Watch .css files
  gulp.watch('stylesheets/**/*.css', ['styles']);
 
  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);
 
  // Watch image files
  // gulp.watch('images/**/*', ['images']);
 
  // Create LiveReload server
  livereload.listen();
 
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
 
});