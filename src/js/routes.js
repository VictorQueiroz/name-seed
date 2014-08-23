(function () {
	'use strict';

	angular
		.module('App/Routes', [
			'User/Routes',
			'Post/Routes',
			'Auth/Routes',
			'Conversation/Routes'
		])

		.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
			$routeProvider

				.when('/', {
					templateUrl: 'index.tpl.html'
				})

				.when('/about-us', {
					templateUrl: 'about-us.tpl.html'
				})

				.otherwise({ redirectTo: '/' });

			$locationProvider.html5Mode(true);
		}]);
})();