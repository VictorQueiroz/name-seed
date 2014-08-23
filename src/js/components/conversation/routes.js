(function () {
	'use strict';

	angular
		.module('Conversation/Routes', [
			'Conversation/Controllers'
		])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/conversations', {
					templateUrl: 'conversations/list.tpl.html',
					controller: 'ConversationListCtrl'
				})

				.when('/conversations/:id', {
					templateUrl: 'conversations/show.tpl.html',
					controller: 'ConversationDetailCtrl'
				});				
		}]);
})();