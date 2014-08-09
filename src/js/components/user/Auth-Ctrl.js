'use strict';

angular.module('User/Ctrl/Auth', [
	'App/Services'
])

.controller('AuthCtrl', ['$scope', '$http', '$alert', '$io', '$location', '$window', function ($scope, $http, $alert, $io, $location, $window) {
	$io.socket.then(function(socket) {
		socket.on('user authenticated', function(user) {
			alert('Congratulations, '+user.username+', you\'re logged!');
		});

		socket.on('user unauthorized', function() {
			alert('Sorry, you can not access this area!');
		});

		socket.on('user authentication error', function () {
			alert('Ocorreu um erro, tente novamente mais tarde!');
		});
	});

	$scope.authenticate = function (credentials) {
		$http.post('/auth/local', credentials).then(function(res) {
			var user = res.data;

			$io.socket.then(function(socket) {
				if(!res.data.result)
					socket.emit('user unauthorized', {});
				
				if (user.username) {
					socket.emit('user authenticated', user);
					$location.path('/');
				}
				else
					socket.emit('user authentication error', {});
			});
		});
	};

	$scope.authenticateWithFB = function () {
		$window.location.href = '/auth/facebook';
	};
}]);