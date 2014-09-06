var gulp = require('gulp');
var path = require('path');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var ngTemplates = require('gulp-ng-templates');
var htmlmin = require('gulp-htmlmin');

var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

var fs = require('fs');

var paths = {};
paths.partials = [
	'src/js/application/partials/**/*.tpl.html',
	'src/js/application/components/**/partials/**/*.tpl.html',
];
paths.stylesheets = ['src/scss/**/{,*/}*.{scss,sass}'];
paths.scripts = ['src/js/**/*.js'];
paths.views = 'app/views';
paths.public = 'public';

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('stylesheets', ['clean'], function () {
	var dest = path.join(paths.public, 'css');

	gulp.src(paths.stylesheets)
		.pipe(sass())
		.pipe(cssmin())
		.pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"], { cascade: true }))
		.pipe(rename({
			basename: 'style', suffix: '.min'
		}))
		.pipe(gulp.dest(dest));
});

// build all vendors
gulp.task('vendors', ['clean'], function () {
	var vendors = [
		{	name: 'underscore', paths: [
			'bower_components/underscore/underscore-min.js'
		]}, { name: 'requirejs', paths: [
			'bower_components/requirejs/require.js'
		]}
	];

	vendors.forEach(function (vendor) {
		var dest = path.join(paths.public, 'vendor', vendor.name);

		gulp.src(vendor.paths)
			.pipe(uglify({
				compress: {
					drop_debugger: true,
					unused: true,
					booleans: true,
					// unsafe: true
				}
			}))
			.pipe(concat(vendor.name))
			.pipe(rename({
				suffix: '.min',
				extname: '.js'
			}))
			.pipe(gulp.dest(dest));
	});
});

gulp.task('scripts', ['clean'], function () {
	var dest = path.join(paths.public, 'js');

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
					drop_debugger: false,
					global_defs: {}
				},
				preserveComments: function () {
					return false;
				},
				output: {
					semicolons: false,
					comments: false
				}
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(dest));
});

gulp.task('partials', ['clean'], function () {
	var dest = path.join(paths.public, 'js', 'application');

	return gulp.src(paths.partials)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(ngTemplates({
			filename: 'partials.js',
			module: 'App/Partials',
			path: function (path, base) {
				return path.replace(base, '').replace('/partials', '');
			}
		}))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('server', ['clean'], function () {
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: [
			'test/**',
			'public/**'
		]
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
gulp.task('build', ['stylesheets', 'scripts', 'partials']);