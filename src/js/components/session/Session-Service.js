(function () {
	'use strict';

	angular.module('Session/Service', [])

	.factory('Session', ['$http', '$window', function ($http, $window) {
		var res = $http.get('/auth/check');

		return {
			isAuthenticated: res.then(function(res) {
				if(res.data.result) {
					return {result: true};
				} else {
					return {result: false};
				}
			}),

			getUser: res.then(function(res) {
				if(res.data.result) {
					return res.data.user;
				}	else {
					return {result: false};
				}
			}),

			destroy: function () {
				$window.location.href = '/auth/destroy';
			}
		};
	}]);
})();