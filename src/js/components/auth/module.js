(function () {
	'use strict';

	angular.module('Auth', [
		'ngRoute',

		'Session/Service',

		'Auth/Controllers'
	])

	.run(['$rootScope', '$route', '$location', '$socket', 'Session', function($rootScope, $route, $location, $socket, Session) {
		$socket().then(function(socket) {
			socket.on('user authenticated', function(user) {
				console.log('Congratulations, '+user.username+', you\'re logged!');
			});

			socket.on('user unauthorized', function() {
				console.log('Sorry, you can not access this area!');
			});

			socket.on('user authentication error', function () {
				console.log('Ocorreu um erro, tente novamente mais tarde!');
			});
		});

		$rootScope.$on('session:logout', function () {
			Session.destroy();
		});

		$rootScope.$on('$routeChangeStart', function(event, next) {
			var params = next.$$route;

			console.log('Checking if you can access this location...');

			var isAuthenticated = Session.isAuthenticated;

			if(params.guest) { // Only guests users will can go in.
				console.log('This route are reserved for guests!');
				console.log('Checking if you are a guest...');

				isAuthenticated().then(function(res) {
					if(res.result) {
						console.log('You are not a guest.');
						console.log('You can not access this area.');
						$location.path('/'); // Temporary, until $routeChangeStart can not prevent default this event.
					} else if (!res.result) {
						console.log('You are a guest, you can go on!');
					}
				});
			} else if (params.authenticated) { // Only authenticated users will can go in.
				console.log('This route are reserved for authenticated users!');
				console.log('Checking if you are authenticated...');
				isAuthenticated().then(function(res) {
					if(!res.result) {
						console.log('You are not authenticated.');
						console.log('You can not access this area.');
						$location.path('/'); // Temporary, until $routeChangeStart can not prevent default this event.
					} else if (res.result) {
						console.log('You are authenticated, you can go on!');
					}
				});
			}

			// ngRoute bug
			// event.preventDefault();
		});	
	}]);
})();