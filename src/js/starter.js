define(['socket.io', 'App'], function (io, angular) {
	if(!window.hasOwnProperty('io')) {
		window.io = io;
	}
});