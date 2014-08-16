(function () {
	'use strict';

	angular
		.module('User/Ctrl/UserCreate', [
			'ngRoute',

			'User/Service',
		])

		.controller('UserCreateCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
			$scope.storeUser = function (user) {
				var user = new User(user);

				user
					.$save()
					.then(function(user) {
						if(user) {
							$location.path('/users/' + (user.id ? user.id : ''))
						}
					});
			};
		}]);
})();