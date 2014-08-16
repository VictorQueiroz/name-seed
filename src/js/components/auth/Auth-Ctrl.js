(function () {
	'use strict';

	angular.module('Auth/Ctrl/Auth', [
		'App/Services'
	])

	.controller('AuthCtrl', ['$scope', '$http', '$io', '$location', '$window', function ($scope, $http, $io, $location, $window) {
		$scope.authenticate = function (credentials) {
			$http.post('/auth/local', credentials).then(function(res) {
				var user = res.data;

				$io.socket.then(function(socket) {
					if(!res.data.result) {
						socket.emit('user unauthorized', {});
					}
					
					if (user.username) {
						socket.emit('user authenticated', user);
						$location.path('/');
					}	else {
						socket.emit('user authentication error', {});
					}
				});
			});
		};

		$scope.authenticateWithFB = function () {
			$window.location.href = '/auth/facebook';
		};
	}]);
})();