requirejs.config({
	shim: {
		'angular': {
			exports: 'angular'
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

		'ngSocketIO': {
			deps: ['angular']
		},

		'ui.bootstrap': {
			deps: ['angular']
		},

		'mgcrea.ngStrap': {
			deps: ['angular']
		},

		'pascalprecht.translate': {
			deps: ['angular']
		},

		'victorqueiroz.ngPaginator': {
			deps: ['angular']
		},

		'partials.min': {
			deps: ['angular']
		}
	},

	paths: {
		'angular': [
			'/vendor/angular/angular.min'
		],

		'ngRoute': [
			'/vendor/angular-route/angular-route.min'
		],

		'ngSanitize': [
			'/vendor/angular-sanitize/angular-sanitize.min'
		],

		'ngAnimate': [
			'/vendor/angular-animate/angular-animate.min'
		],

		'ngResource': [
			'/vendor/angular-resource/angular-resource.min'
		],

		'ngSocketIO': [
			'/vendor/angular-socketio/dist/angular-socketio.min'
		],

		'ui.bootstrap': [
			'/vendor/angular-bootstrap/ui-bootstrap-tpls.min'
		],

		'mgcrea.ngStrap': [
			'/vendor/angular-strap/dist/angular-strap.min',
			'/vendor/angular-strap/dist/angular-strap.tpl.min'
		],

		'pascalprecht.translate': [
			'/vendor/angular-translate/angular-translate.min'
		],

		'victorqueiroz.ngPaginator': [
			'/vendor/ng-paginator/angular-paginator.min'
		],

		'underscore': [
			'/vendor/underscore/underscore.min'
		],

		'codemirror': [
			'/vendor/codemirror/codemirror.min'
		],

		// 'App/Controllers': 'controllers',
		// 'App/Filters': 'filters',
		// 'App/Services': 'services',
		// 'App/Partials': 'partials',
		// 'App/Routes': 'routes',

		// 'Auth': '',
		// 'Post': '',
		// 'User': '',

		'application': 'module'
	}
});

requirejs(['application']);