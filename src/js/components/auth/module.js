'use strict';

angular.module('Auth', [
	'ngRoute',

	'Session/Service'
])

.run(['$rootScope', '$route', '$location', 'Session', function($rootScope, $route, $location, Session) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		var params = next.$$route;

		console.log('Checking if you can access this location...');

		var isAuthenticated = Session.isAuthenticated;

		if(params.guest) { // Only guests users will can go in.
			console.log('This route are reserved for guests!');
			console.log('Checking if you are a guest...');

			isAuthenticated.then(function(res) {
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
			isAuthenticated.then(function(res) {
				if(!res.result) {
					console.log('You are not authenticated.');
					console.log('You can not access this area.');
					$location.path('/'); // Temporary, until $routeChangeStart can not prevent default this event.
				} else if (res.result) {
					console.log('You are authenticated, you can go on!');
				}
			});
		}

		// event.preventDefault();
	});
}]);