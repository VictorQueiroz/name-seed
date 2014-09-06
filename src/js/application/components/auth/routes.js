define(['angular'], function (angular) {
	'use strict';

	angular.module('Auth/Routes', [])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/authentication', {
				templateUrl: 'authentication.tpl.html',
				controller: 'AuthCtrl',
				guest: true
			});
	}]);
});