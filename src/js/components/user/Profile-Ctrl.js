(function () {
	'use strict';

	angular
		.module('User/Ctrl/Profile', [
			'Session/Service'
		])

		.controller('ProfileCtrl', ['$scope', 'Session', function ($scope, Session) {
			Session.getUser().then(function(user) {
				$scope.user = user;
			});
		}]);
})();