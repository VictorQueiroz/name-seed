define(['socket.io', 'App/module'], function (io, angular) {
	if(!window.hasOwnProperty('io')) {
		window.io = io;
	}
});