(function () {
	'use strict';

	angular.module('Auth/Routes', [
		'ngRoute',

		'Auth/Controllers'
	])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/authentication', {
				templateUrl: 'authentication.tpl.html',
				controller: 'AuthCtrl',
				guest: true
			});
	}]);
})();