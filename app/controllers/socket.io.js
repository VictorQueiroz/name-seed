'use strict';

module.exports = function (io) {
	io.on('connection', function (socket) {
		console.log('A user connected!');

		socket.on('user authenticated', function(user){
			socket.emit('user authenticated', user);
		});

		socket.on('user new', function (_id) {
			socket.broadcast.emit('user new', {name: 'Novo usuário.'});
		});
	});
};