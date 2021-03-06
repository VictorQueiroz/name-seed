define(['angular'], function (angular) {
	'use strict';

	angular
		.module('User/Ctrl/UserCreate', [])

		.controller('UserCreateCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
			$scope.user = new User();

			$scope.storeUser = function (user) {
				user
					.$save()
					.then(function(user) {
						if(user) {
							$location.path('/users/' + (user.id ? user.id : ''));
						}
					});
			};
		}]);
});