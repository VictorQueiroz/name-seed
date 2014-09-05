var tests = [];
for (var file in window.__karma__.files) {
  if (/Spec\.js$/.test(file)) {
    tests.push(file);
  }
}

requirejs.config({
	baseUrl: '/base/src/js/application',

	paths: {
		// App modules
		'App': 'module',
		'App/Controllers': 'controllers',
		'App/Services': 'services',
		'App/Routes': 'routes',
		'App/Partials': '../../../public/js/application/partials.min',
		'App/Directives': 'directives',
		'App/Filters': 'filters',

		// Auth modules
		'Auth': 'components/auth/module',
		'Auth/Routes': 'components/auth/routes',
		'Auth/Directives': 'components/auth/directives',
		'Auth/Directive/IfAuthenticated': 'components/auth/IfAuthenticated-Directive',
		'Auth/Directive/IfGuest': 'components/auth/IfGuest-Directive',
		'Auth/Controllers': 'components/auth/controllers',
		'Auth/Ctrl/Auth': 'components/auth/Auth-Ctrl',

		// Post modules
		'Post': 'components/post/module',
		'Post/Controllers': 'components/post/controllers',
		'Post/Routes': 'components/post/routes',
		'Post/Services': 'components/post/services',

		// Session modules
		'Session': 'components/session/module',
		'Session/Services': 'components/session/services',
		'Session/Service': 'components/session/Session-Service',

		'User': 'components/user/module',
		'User/Controllers': 'components/user/controllers',
		'User/Ctrl/Profile': 'components/user/Profile-Ctrl',
		'User/Ctrl/UserDetail': 'components/user/UserDetail-Ctrl',
		'User/Ctrl/UserCreate': 'components/user/UserCreate-Ctrl',
		'User/Services': 'components/user/services',
		'User/Service': 'components/user/User-Service',
		'User/Routes': 'components/user/routes',

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

		'socket.io': 'http://localhost:9876/socket.io/socket.io.js',

		'ngMoment': '../../../bower_components/ng-moment/dist/ng-moment.min',

		'ngBootstrap': '../../../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',

		'ngStrap': [
			'../../../bower_components/angular-strap/dist/angular-strap.min',
			'../../../bower_components/angular-strap/dist/angular-strap.tpl.min'
		],

		'ngTranslate': '../../../bower_components/angular-translate/angular-translate.min',

		'ngPaginator': '../../../bower_components/ng-paginator/angular-paginator.min',
	},

	shim: {
		'App/Partials': {
			deps: ['angular']
		},

		'angular': {
			exports: 'angular'
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