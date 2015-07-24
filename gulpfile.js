'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');

// add custom browserify options here
var browserifyOpts = {
  entries: ['./app/app.js'],
  debug: true
};
var opts = assign({}, watchify.args, browserifyOpts);
var b = watchify(browserify(opts)); 
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

// add transformations here
//b.transform(partialify);
//b.transform('browserify-css', { autoInject: true });

gulp.task('js', bundle); // so you can run `gulp js` to build the file
gulp.task('assets',assets);
gulp.task('default', ['js','assets']); 


function assets(){
	 return gulp.src(['app/app.css','app/index.html'])
	 .pipe(gulp.dest('dist/'));
}

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.min.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(uglify())
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}




