/**
 * Socket.IO false
 */
(function (window) {
	var listeners = [],
	events = [],
	connect;

	var Io = function () {
	};

	var Socket = function () {};

	Socket.prototype = function () {};

	Socket.prototype.on = function (name, cb) {
		listeners.push([name, cb]);
	};

	Socket.prototype.emit = function (name, cb) {
		events.push([name, cb]);
	};

	Io.prototype.connect = function () {
		return new Socket;
	};

	window.io = new Io;
})(window);