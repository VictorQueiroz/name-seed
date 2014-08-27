(function () {
	'use strict';

	angular
		.module('User/Ctrl/UserList', [])

		.controller('UserListCtrl', ['$scope', 'User', function ($scope, User) {
			var users = $scope.users = User.list();
		}]);
})();