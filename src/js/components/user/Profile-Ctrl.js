define(['angular'], function (angular) {
	'use strict';

	angular
		.module('User/Ctrl/Profile', [])

		.controller('ProfileCtrl', ['$scope', 'Session', function ($scope, Session) {
			Session.getUser().then(function(user) {
				$scope.user = user;
			});
		}]);
});