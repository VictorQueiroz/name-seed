(function () {
	'use strict';

	angular
		.module('App', [
			'ngRoute',
			'ngAnimate',
			'ngSanitize',

			'ui.bootstrap',
			'mgcrea.ngStrap',	
			'pascalprecht.translate',
			'victorqueiroz.ngPaginator',

			'App/Routes',
			'App/Controllers',
			'App/Filters',
			'App/Directives',
			'App/Services',
			'App/Partials',

			'Auth'
		])

		.constant('_CSRF', angular.element(document.querySelector('meta[name=_csrf]')).attr('content'))

		.config(['$httpProvider', '_CSRF', function ($httpProvider, _CSRF) {
			$httpProvider.defaults.headers.common = {
				'X-CSRF-Token': _CSRF
			};
		}])

		.run(['$socket', function($socket) {
			$socket().then(function(socket) {
				socket.on('user connected', function () {
					console.log('New user connected!');
				});

				socket.on('user disconnected', function () {
					console.log('User disconnected!');
				});
			});
		}]);
})();