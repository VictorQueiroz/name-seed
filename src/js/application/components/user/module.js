define([
	'angular',
	'ngRoute',

	'User/controllers',
	'User/routes',
	'User/services',

	'Session/module'
], function (angular) {
	'use strict';

	angular
		.module('User', [
			'ngRoute',
			'Session',

			'User/Controllers',
			'User/Services',
			'User/Routes'
		]);
});