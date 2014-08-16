(function () {
	'use strict';

	angular
		.module('App/Services', [
			'User/Services'
		])

		.value('version', '0.0.1')

		.factory('$io', ['$q', '$timeout', '$window', function($q, $timeout, $window){
			var promise = function () {
				var deferred = $q.defer();

				$timeout(function () {
					deferred.resolve($window.io);
				});

				return deferred.promise;
			};

			return {
				socket: promise().then(function (io) {
					var socket = io.connect();

					return socket;
				})
			};
		}])

		.factory('$moment', ['$q', '$timeout', '$window', function($q, $timeout, $window){
			return (function () {
				var deferred = $q.defer();

				$timeout(function () {
					deferred.resolve($window.moment);
				});

				return deferred.promise;
			})();
		}]);
})();