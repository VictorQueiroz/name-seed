(function () {
	'use strict';

	angular.module('Auth/Directive/IfGuest', [
		'Session/Service'
	])

	.directive('ifGuest', ['Session', function(Session) {
		return {
			link: function($scope, $element) {
				Session.isAuthenticated().then(function(res) {
					if(res.result) {
						$element.remove();
					}
				});
			}
		};
	}]);
})();