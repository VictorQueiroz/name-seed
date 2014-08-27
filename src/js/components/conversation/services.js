(function () {
	'use strict';

	angular
		.module('Conversation/Services', [
			'Conversation/Service',
			'Conversation/Service/Message'
		])

		.factory('$moment', ['$q', '$timeout', '$window', function($q, $timeout, $window){
			return function () {
				return $q.when($window.moment);
			};
		}]);
})();