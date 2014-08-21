(function () {
	'use strict';

	angular
		.module('Message/Routes', [
			'Message/Controllers'
		])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/messages', {
					templateUrl: 'messages/list.tpl.html',
					controller: 'MessageListCtrl'
				})

				.when('/messages/:username', {
					templateUrl: 'messages/show.tpl.html',
					controller: 'MessageDetailCtrl'
				});				
		}]);
})();