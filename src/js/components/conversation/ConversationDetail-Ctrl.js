(function () {
	'use strict';

	angular
		.module('Conversation/Ctrl/ConversationDetail', [
			'Conversation/Services',
			'ngSocketIO'
		])

		.run(['$socket', function ($socket) {
			$socket().then(function(socket) {
				socket.on('connect', function () {
					console.log('you are connected');
				});
			});
		}])

		.controller('ConversationDetailCtrl', ['$scope', '$routeParams', '$socket', 'Conversation', 'Message', function ($scope, $routeParams, $socket, Conversation, Message) {
			var conversation = Conversation.get({
				id: $routeParams.id
			});

			conversation
				.$promise
				.then(function (conversation) {	
					$scope.conversation = conversation;
				});

			$scope.sendMessage = function (message) {
				message = new Message(message);

				conversation
					.$promise
					.then(function (conversation) {
						console.log(conversation);
						
						message.conversation_id = conversation.id;

						message
							.$save()
							.then(function (message) {
								$scope.$emit('conversation message new', message.id);
							});
					});
			};

			// Socket.IO events emitter
			$socket().then(function (socket) {
				socket.on('conversation message typing', function () {
					console.log('You\'re typing...');
				});

				socket.on('conversation message', function (message) {
					console.log('We have a new message!');
					console.log(message);

					$scope.$emit('conversation message', message);
				});

				// $scope
				// $scope.$watch(function () {
				// 	return $scope.message.content;
				// }, function () {
				// 	$scope.$emit('conversation message typing', 1);
				// });

				$scope.$on('conversation message typing', function (event, status) {
					socket.emit('conversation message typing', status);
				});

				$scope.$on('conversation message new', function (event, id) {
					console.log('\'conversation message new\' event received. Sending back to socket.io!');

					socket.emit('conversation message new', id);

					console.log('Event sent!');
				});

				$scope.$on('conversation message', function (event, message) {
					console.log('We are receiving a new message!');
					console.log(message);

					$scope.conversation.messages.unshift(message);
					$scope.message.content = '';
					$scope.$apply();
				});
			});
		}]);
})();