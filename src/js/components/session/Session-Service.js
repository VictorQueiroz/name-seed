'use strict';

angular.module('Session/Service', [
	'ngCookies'
])

.factory('Session', ['$http', '$cookieStore', function ($http, $cookieStore) {
	var res = $http.get('/auth/check');

	return {
		isAuthenticated: res.then(function(res) {
			if(res.data.result)
				return {result: true};
			else
				return {result: false};
		}),

		getUser: res.then(function(res) {
			if(res.data.result)
				return res.data.user;
			else
				return {result: false};
		})
	};
}]);