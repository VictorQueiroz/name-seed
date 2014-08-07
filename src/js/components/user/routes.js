'use strict';

angular.module('User/Routes', [
	'User/Controllers'
])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/users/:id', {
			templateUrl: 'users/show.tpl.html',
			controller: 'UserDetailCtrl'
		})

		.when('/profile', {
			templateUrl: 'users/profile.tpl.html',
			controller: 'ProfileCtrl'
		});
}]);