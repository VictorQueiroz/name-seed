define(['angular'], function (angular) {
	'use strict';

	angular
		.module('App/Routes', [])

		.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
			console.log('Configuring module: App/Routes');

			$routeProvider

				.when('/', {
					templateUrl: 'index.tpl.html'
				})

				.when('/about-us', {
					templateUrl: 'about-us.tpl.html'
				})

				.otherwise({ redirectTo: '/' });

			$locationProvider.html5Mode(true);
		}])

		.run(function () {
			console.log('Running module: App/Routes');
		});
});