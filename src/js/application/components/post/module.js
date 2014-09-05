define([
	'angular',
	'ngRoute',
	'ngSocketIO',
	'ngMoment',

	'Post/controllers',
	'Post/services',
	'Post/routes'
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