(function () {
	'use strict';

	angular
		.module('Message/Ctrl/MessageList', [
			'Message/Service'
		])

		.controller('MessageListCtrl', ['$scope', '$socket', 'Message', function ($scope, $socket, Message) {
			$scope.messages = Message.list();
		}]);
})();