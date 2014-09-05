define([
	'angular',
	'ngRoute',

	'User/Controllers',
	'User/Routes',
	'User/Services',

	'Session'
], function (angular) {
	'use strict';

	angular
		.module('User', [
			'ngRoute',
			// 'Session',

			// 'User/Controllers',
			// 'User/Services',
			// 'User/Routes'
		]);
});