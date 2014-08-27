// Karma configuration
// Generated on Sat Aug 23 2014 14:00:56 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',      
      'bower_components/ng-paginator/angular-paginator.min.js',
      'bower_components/angular-resource/angular-resource.min.js',
      'bower_components/angular-route/angular-route.min.js',
      'bower_components/angular-translate/angular-translate.min.js',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/angular-cookies/angular-cookies.min.js',
      'bower_components/angular-strap/dist/angular-strap.min.js',
      'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-socketio/dist/angular-socketio.min.js',
      'bower_components/ng-moment/dist/ng-moment.min.js',
      'src/js/**/{,*/}*.js',
      'test/unit/**/{,*/}*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
