var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');

var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var cssmin = require('gulp-cssmin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

var fs = require('fs');

var paths = {};
paths.partials = ['src/partials/**/{,*/}*.html'];
paths.stylesheets = ['src/scss/**/{,*/}*.{scss,sass}'];
paths.scripts = ['src/js/**/{,*/}*.js'];
paths.views = 'app/views';
paths.public = 'public';

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('stylesheets', ['clean'], function () {
	gulp.src(paths.stylesheets)
		.pipe(sass())
		.pipe(cssmin())
		.pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"], { cascade: true }))
		.pipe(rename({
			basename: 'style', suffix: '.min'
		}))
		.pipe(gulp.dest(paths.public + '/css'));
});

gulp.task('scripts', ['clean'], function () {
	return gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
			.pipe(jshint({
				lookup: true
			}))
			.pipe(jshint.reporter('default', {
				verbose: true
			}))
			.pipe(uglify({
				compress: {
					unsafe: false
				},
				preserveComments: function () {
					return false;
				},
				output: {
					semicolons: false,
					comments: false,
				}
			}))
			.pipe(concat('base.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.public + '/js'));
});

gulp.task('partials', ['clean'], function () {
	return gulp.src(paths.partials)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(templateCache({
			module: 'App/Partials',
			filename: 'partials.js',
			standalone: true
		}))
		.pipe(uglify())		
		.pipe(gulp.dest(paths.public + '/js'));
});

gulp.task('server', ['clean'], function () {
	nodemon({
		script: 'server.js'
	})

	.on('restart', function () {
		console.log('Restarting server...');
	});
});

gulp.task('watch', ['clean'], function () {
	gulp
		.watch(paths.stylesheets, ['stylesheets'])
		.on('change', livereload.changed);

	gulp
		.watch(paths.partials, ['partials'])
		.on('change', livereload.changed);

	gulp
		.watch(paths.scripts, ['scripts'])
		.on('change', livereload.changed);		
});

gulp.task('default', ['server', 'watch', 'stylesheets', 'scripts', 'partials']);