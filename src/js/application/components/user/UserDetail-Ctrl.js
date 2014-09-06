define(['angular'], function (angular) {
	'use strict';

	angular
		.module('User/Ctrl/UserDetail', [])

		.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User', function ($scope, $routeParams, User) {
			var user = $scope.user = User.get({ id: $routeParams.id });
		}]);
});