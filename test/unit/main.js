var tests = [];
for (var file in window.__karma__.files) {
  if (/Spec\.js$/.test(file)) {
    tests.push(file);
  }
}

var paths = {
	// App modules
	'App': '.',
	'App/partials': '../../../public/js/application/partials.min',

	// Auth modules
	'Auth': 'components/auth',

	// Post modules
	'Post': 'components/post',

	// Session modules
	'Session': 'components/session',

	// User modules
	'User': 'components/user',

	// Dependencies
	'angular': '../../../bower_components/angular/angular.min',

	'underscore': '../../../bower_components/underscore/underscore.min',

	'moment': '../../../bower_components/moment/min/moment-with-locales.min',

	'ngUnderscore': '../../../bower_components/ng-underscore/dist/ng-underscore.min',

	'ngRoute': [
		'../../../bower_components/angular-route/angular-route.min'
	],

	'ngMock': '../../../bower_components/angular-mocks/angular-mocks',

	'ngSanitize': '../../../bower_components/angular-sanitize/angular-sanitize.min',

	'ngAnimate': '../../../bower_components/angular-animate/angular-animate.min',

	'ngResource': '../../../bower_components/angular-resource/angular-resource.min',

	'ngSocketIO': '../../../bower_components/angular-socketio/dist/angular-socketio.min',

	'socket.io': '../socket.io/socket.io',

	'ngMoment': '../../../bower_components/ng-moment/dist/ng-moment.min',

	'ngBootstrap': '../../../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',

	'ngStrap': [
		'../../../bower_components/angular-strap/dist/angular-strap.min',
		'../../../bower_components/angular-strap/dist/angular-strap.tpl.min'
	],

	'ngTranslate': '../../../bower_components/angular-translate/angular-translate.min',

	'ngPaginator': '../../../bower_components/ng-paginator/angular-paginator.min',
};

requirejs.config({
	baseUrl: '/base/src/js/application',

	paths: paths,

	shim: {
		'App/partials': {
			deps: ['angular']
		},

		'angular': {
			exports: 'angular'
		},

		'moment': {
			exports: 'moment'
		},

		'underscore': {
			exports: '_'
		},

		'socket.io': {
			exports: 'io'
		},

		'ngRoute': {
			deps: ['angular']
		},

		'ngMock': {
			deps: ['angular']
		},

		'ngSanitize': {
			deps: ['angular']
		},

		'ngAnimate': {
			deps: ['angular']
		},

		'ngResource': {
			deps: ['angular']
		},

		'ngMoment': {
			deps: ['angular', 'moment']
		},

		'ngSocketIO': {
			deps: ['socket.io', 'angular']
		},

		'ngBootstrap': {
			deps: ['angular']
		},

		'ngStrap': {
			deps: ['angular']
		},

		'ngTranslate': {
			deps: ['angular']
		},

		'ngPaginator': {
			deps: ['angular']
		},
	},

	deps: tests,

	callback: window.__karma__.start
});