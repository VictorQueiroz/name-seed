requirejs.config({
	appDir: 'src',

	baseUrl: 'js/application',

	paths: {
		// App modules
		'App': 'module',
		'App/Controllers': 'controllers',
		'App/Services': 'services',
		'App/Routes': 'routes',
		'App/Partials': 'partials.min',
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
		'angular': '/vendor/angular/angular.min',

		'socket.io': '../../socket.io/socket.io',

		'underscore': '/vendor/underscore/underscore.min',

		'moment': '/vendor/moment/min/moment-with-locales.min',

		'ngUnderscore': '/vendor/ng-underscore/dist/ng-underscore.min.js',

		'ngRoute': [
			'/vendor/angular-route/angular-route.min'
		],

		'ngSanitize': '/vendor/angular-sanitize/angular-sanitize.min',

		'ngAnimate': '/vendor/angular-animate/angular-animate.min',

		'ngResource': '/vendor/angular-resource/angular-resource.min',

		'ngSocketIO': '/vendor/angular-socketio/dist/angular-socketio.min',

		'ngMoment': '/vendor/ng-moment/dist/ng-moment.min',

		'ngBootstrap': '/vendor/angular-bootstrap/ui-bootstrap-tpls.min',

		'ngStrap': [
			'/vendor/angular-strap/dist/angular-strap.min',
			'/vendor/angular-strap/dist/angular-strap.tpl.min'
		],

		'ngTranslate': '/vendor/angular-translate/angular-translate.min',

		'ngPaginator': '/vendor/ng-paginator/angular-paginator.min',
	},

	shim: {
		//
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
});

requirejs(['../starter']);