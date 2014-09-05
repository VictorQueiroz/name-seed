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
		])

		.config(function () {
			console.log('Configuring module: User');
		})

		.run(function () {
			console.log('Running module: User');
		});
});