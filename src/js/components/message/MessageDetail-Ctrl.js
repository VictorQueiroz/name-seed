(function () {
	'use strict';

	angular
		.module('Message/Ctrl/MessageDetail', [
			'Message/Service'
		])

		.controller('MessageDetailCtrl', ['$scope', '$routeParams', '$socket', 'Message', function ($scope, $routeParams, $socket, Message) {
			$scope.messages = Message.get({
				username: $routeParams.username
			});
		}]);
})();