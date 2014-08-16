(function () {
	'use strict';

	angular.module('User/Ctrl/UserList', [
		'User/Service'
	])

	.controller('UserListCtrl', ['$scope', 'User', function ($scope, User) {
		$scope.users = User.list();
	}]);
})();