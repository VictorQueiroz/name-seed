define([
	'angular',

	'ngRoute',
	'ngSocketIO',
	'Session/module',

	'Auth/controllers',
	'Auth/routes',
	'Auth/directives'
], function (angular) {
	'use strict';

	angular.module('Auth', [
		'ngRoute',
		'ngSocketIO',
		'Session',
		'Auth/Controllers',
		'Auth/Routes',
		'Auth/Directives'
	])

	.run(['$rootScope', '$route', '$location', '$socket', 'Session', function($rootScope, $route, $location, $socket, Session) {
		$socket().then(function(socket) {
			socket.on('user authenticated', function(user) {
				console.log('Congratulations, '+user.username+', you\'re logged!');
			});

			socket.on('user unauthorized', function() {
			});

			socket.on('user authentication error', function () {
			});
		});

		$rootScope.$on('session:logout', function () {
			Session.destroy();
		});

		$rootScope.$on('$routeChangeStart', function(event, next) {
			var params = next.$$route;

			var isAuthenticated = Session.isAuthenticated;

			if(!params || params.guest) return;

			if(params.guest) { // Only guests users will can go in.
				isAuthenticated().then(function(res) {
					if(res.result) {
						$location.path('/'); // Temporary, until $routeChangeStart can not prevent default this event.
					} else if (!res.result) {
					}
				});
			} else if (params.authenticated) { // Only authenticated users will can go in.
				isAuthenticated().then(function(res) {
					if(!res.result) {
						$location.path('/'); // Temporary, until $routeChangeStart can not prevent default this event.
					}
				});
			}

			// ngRoute bug
			// event.preventDefault();
		});	
	}]);
});