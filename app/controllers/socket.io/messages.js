'use strict';

var models = require('../../models'),
Message = models.Message,
Conversation = models.Conversation,
User = models.User;

module.exports = function (socket) {
	socket.on('conversation message typing', function (status) {
		socket.emit('conversation message typing', status);
	});

	socket.on('conversation message new', function (id) {
		Message
			.find({
				where: {
					id: id
				},
				include: [
					{ model: User, as: 'Author' },
					{ model: Conversation, as: 'Conversation' }
				]
			})

			.success(function (message) {
				socket.emit('conversation message', message);
			});
	});
};