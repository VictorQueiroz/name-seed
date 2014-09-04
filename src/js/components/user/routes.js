(function () {
	'use strict';

	angular
		.module('User/Routes', [])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/users/:id', {
					templateUrl: 'user/show.tpl.html',
					controller: 'UserDetailCtrl'
				})

				.when('/register', {
					templateUrl: 'user/create.tpl.html',
					controller: 'UserCreateCtrl'
				})		

				.when('/profile', {
					templateUrl: 'user/profile.tpl.html',
					controller: 'ProfileCtrl'
				})

				.when('/auth/destroy', {
					controller: function ($window) {
						$window.location.href = '/auth/destroy';
					}
				});
		}]);
})();