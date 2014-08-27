(function () {
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
			'Conversation',
			'Post',
			'User'
		])

		.constant('_CSRF', angular.element(document.querySelector('meta[name=_csrf]')).attr('content'))

		.config(['$httpProvider', '_CSRF', function ($httpProvider, _CSRF) {
			$httpProvider.defaults.headers.common = {
				'X-CSRF-Token': _CSRF
			};

			console.log('Configuring module: App...');
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

			console.log('Running module: App...');
		}]);
})();