(function () {
	'use strict';

	angular
		.module('Conversation/Ctrl/ConversationList', [
			'Conversation/Service'
		])

		.controller('ConversationListCtrl', ['$scope', '$socket', 'Conversation', function ($scope, $socket, Conversation) {
			$scope.$on('conversations page changed', function (event, page, paginator) {
				if(paginator.perPage < 1) {
					paginator.perPage = 4;
				}

				Conversation.list({
					page: page,
					per_page: paginator.perPage
				}).$promise.then(function (pag) {
					$scope.conversations = pag.data;
					angular.extend(paginator, pag);
				});
			});
		}]);
})();