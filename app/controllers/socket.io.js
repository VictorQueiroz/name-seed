'use strict';

var models = require('../models'),
User = models.User,
Post = models.Post;

module.exports = function (io) {
	io.on('disconnect', function (socket) {
		socket.broadcast.emit('user disconnected');
	});

	io.on('connection', function (socket) {
		socket.broadcast.emit('user connected');

		socket.on('user authenticated', function(user){
			socket.emit('user authenticated', user);
		});

		socket.on('user new', function (id) {
			User.find({
				where: {
					id: id
				}
			})
			.success(function(user) {
				socket.broadcast.emit('user new', user);
			});
		});

		socket.on('post new', function (id) {
			Post.find({
				where: {
					id: id
				}
			})
			.success(function(post) {
				socket.broadcast.emit('post new', post);
			});			
		});

		socket.on('user all', function () {
			User.findAll().success(function(users){
				socket.emit('user all', users);
			});
		});
	});
};