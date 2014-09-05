define([
	'angular',
	'socket.io',
	'ngRoute',
	'ngSocketIO',
	'ngMoment',

	'./controllers',
	'./services',
	'./routes'
], function (angular) {
	'use strict';

	angular
		.module('Post', [
			'ngRoute',
			'ngSocketIO',
			'ngMoment',

			'Post/Controllers',
			'Post/Services',
			'Post/Routes'
		]);
});