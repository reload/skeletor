/**
 * @file
 * Gulpfile.js that builds assets for the project.
 */

var themeName = 'SKELETOR';

var gulp = require('gulp');
var del = require('del');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var runSequence = require('run-sequence');

var assetPaths = {
  src: 'web/themes/custom/' + themeName + '/assets_src',
  dest: 'web/themes/custom/' + themeName + '/assets'
};

var path = {
  stylesheets: {
    src: assetPaths.src + '/scss',
    dest: assetPaths.dest + '/css'
  },
  js: {
    src: assetPaths.src + '/js',
    dest: assetPaths.dest + '/js'
  },
  images: {
    src: assetPaths.src + '/images',
    dest: assetPaths.dest + '/images'
  }
};

gulp.task('scss', function () {
  return gulp.src(path.stylesheets.src + '/*/*.scss')
    .pipe(sourcemaps.init())
    .pipe(scss({
      includePaths: [],
      outputStyle: 'expanded'
    }).on('error', notify.onError(function (error) {
      return "\n\nSCSS error: " + error.message;
    })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.stylesheets.dest))
});

gulp.task('javascript', function () {
  return gulp.src([path.js.src + '/*.js', path.js.src + '/*/*.js'])
    // @TODO Her mangler ESLINT.
    .pipe(gulp.dest(path.js.dest))
});

gulp.task('images', function () {
  return gulp.src(path.images.src + '/*.*')
    .pipe(gulp.dest(path.images.dest))
});

gulp.task('watch', function () {
  gulp.watch([path.stylesheets.src + '/*/*.scss', path.stylesheets.src + '/*/*.scss'], ['scss']);
  gulp.watch(path.js.src + '/*/*.js', ['javascript']);
  gulp.watch(path.images.src + '/*', ['images']);
});

gulp.task('clean', function () {
  return del([assetPaths.dest]);
});

gulp.task('build', function() {
  runSequence ('clean', ['scss', 'javascript', 'images']);
});

gulp.task('default', function() {
  runSequence ('build', 'watch');
});
