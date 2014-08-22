(function () {
	'use strict';

	angular
		.module('Message/Ctrl/MessageList', [
			'Message/Service'
		])

		.controller('MessageListCtrl', ['$scope', '$socket', 'Message', function ($scope, $socket, Message) {
			$scope.$on('messages page changed', function (event, page, paginator) {
				if(!paginator.perPage < 1) {
					paginator.perPage = 4;
				}

				Message.list({
					page: page,
					per_page: paginator.perPage
				}).$promise.then(function (pag) {
					$scope.messages = pag.data;
					angular.extend(paginator, pag);
				});
			})
		}]);
})();