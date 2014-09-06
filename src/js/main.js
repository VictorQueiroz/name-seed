requirejs.config({
	appDir: 'src',

	baseUrl: 'js/application',

	paths: {
		// App modules
		'App': './',
		'App/partials': 'partials.min',

		// Auth modules
		'Auth': 'components/auth',

		// Post modules
		'Post': 'components/post',

		// Session modules
		'Session': 'components/session',

		// User modules
		'User': 'components/user',

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
		// App
		'App/partials': {
			deps: ['angular']
		},

		// Others
		'angular': {
			exports: 'angular'
		},

		'underscore': {
			exports: '_'
		},

		'socket.io': {
			exports: 'io'
		},

		'moment': {
			exports: 'moment'
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