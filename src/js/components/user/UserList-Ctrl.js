'use strict';

angular.module('User/Ctrl/UserList', [
	'User/Service'
])

.controller('UserListCtrl', ['$scope', 'User', function ($scope, User) {
	var users = $scope.users = User.list();
}]);