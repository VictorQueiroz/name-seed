(function () {
	'use strict';

	angular.module('Auth/Ctrl/Auth', [])

	.controller('AuthCtrl', ['$scope', '$http', '$socket', '$location', '$window', function ($scope, $http, $socket, $location, $window) {
		$scope.authenticate = function (credentials) {
			$http.post('/auth/local', credentials).then(function(res) {
				var user = res.data;

				$socket().then(function(socket) {
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