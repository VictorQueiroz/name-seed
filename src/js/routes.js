'use strict';

angular.module('App/Routes', [
	'ngRoute',

	'User/Routes',
	'Post/Routes'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider

		.when('/', {
			templateUrl: 'index.tpl.html'
		})

		.when('/about-us', {
			templateUrl: 'about-us.tpl.html'
		})

		.when('/authentication', {
			templateUrl: 'authentication.tpl.html',
			controller: 'AuthCtrl',
			guest: true
		})

		.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
}]);