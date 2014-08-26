(function () {
	'use strict';

	angular
		.module('App/Services', [
			'User/Services',
			'App/Services'
		])

		.value('version', '0.0.1')

		.factory('$moment', ['$q', '$timeout', '$window', function($q, $timeout, $window){
			return function () {
				return $q.when($window.moment);
			};
		}]);
})();