(function () {
	'use strict';

	angular.module('Auth/Directive/IfAuthenticated', [
		'Session/Service'
	])

	.directive('ifAuthenticated', ['Session', function(Session) {
		return {
			link: function($scope, $element, $attr) {
				Session.isAuthenticated.then(function(res) {
					if(!res.result) {
						$element.remove();
					}
				});
			}
		};
	}]);
})();