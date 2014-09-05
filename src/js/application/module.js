define([
	'angular',

	'ngRoute',
	'ngAnimate',
	'ngSanitize',
	'ngSocketIO',

	'ngBootstrap',
	'ngStrap',
	'ngPaginator',
	'ngTranslate',

	'App/controllers',
	'App/filters',
	'App/services',
	'App/partials',
	'App/routes',
	'App/directives',

	'Auth/module',
	'Post/module',
	'User/module'
], function (angular) {
	'use strict';

	angular
		.module('App', [
			'ngRoute',
			'ngAnimate',
			'ngSanitize',

			'ngSocketIO',
			'ui.bootstrap',
			'mgcrea.ngStrap',	
			'pascalprecht.translate',
			'victorqueiroz.ngPaginator',

			'App/Controllers',
			'App/Filters',
			'App/Directives',
			'App/Services',
			'App/Partials',
			'App/Routes',			

			'Auth',
			'Post',
			'User'
		])

		.constant('_CSRF', angular.element(document.querySelector('meta[name=_csrf]')).attr('content'))

		.config(['$httpProvider', '_CSRF', function ($httpProvider, _CSRF) {
			$httpProvider.defaults.headers.common = {
				'X-CSRF-Token': _CSRF
			};
		}])

		.run(['$rootScope', '$socket', function($rootScope, $socket) {
			$socket().then(function(socket) {
				socket.on('user connected', function () {
					console.log('New user connected!');
				});

				socket.on('user disconnected', function () {
					console.log('A user disconnected!');
					$rootScope.$broadcast('user disconnected');
				});

				$rootScope.$on('user disconnected', function () {
				});
			});
		}]);
	

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['App']);
	});
});