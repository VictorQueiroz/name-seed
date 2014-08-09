'use strict';

angular.module('App/Services', [
	'User/Services'
])

.value('version', '0.0.1')

.factory('$io', ['$window', '$q', function($window, $q){
	var io = function () {
		var deferred = $q.defer();
		deferred.resolve($window.io);
		return deferred.promise;
	};

	return {
		socket: io().then(function(io) {
			return io.connect();
		})
	};
}]);