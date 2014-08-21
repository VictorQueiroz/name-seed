(function () {
	'use strict';

	angular
		.module('App/Services', [
			'User/Services'
		])

		.value('version', '0.0.1')

		.factory('$io', ['$q', '$timeout', '$window', function($q, $timeout, $window){
			return function () {
				return $q.when($window.io);
			};
		}])

		.factory('$socket', ['$io', function ($io) {
			return function () {
				return $io().then(function (io) {
					var socket = io.connect();

					return socket;
				});
			};
		}])

		.factory('$moment', ['$q', '$timeout', '$window', function($q, $timeout, $window){
			return function () {
				return $q.when($window.moment);
			};
		}]);
})();