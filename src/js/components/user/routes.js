(function () {
	'use strict';

	angular
		.module('User/Routes', [
			'User/Controllers'
		])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/users/:id', {
					templateUrl: 'users/show.tpl.html',
					controller: 'UserDetailCtrl'
				})

				.when('/register', {
					templateUrl: 'users/create.tpl.html',
					controller: 'UserCreateCtrl'
				})		

				.when('/profile', {
					templateUrl: 'users/profile.tpl.html',
					controller: 'ProfileCtrl'
				})

				.when('/auth/destroy', {
					controller: function ($window) {
						$window.location.href = '/auth/destroy';
					}
				});
		}]);
})();