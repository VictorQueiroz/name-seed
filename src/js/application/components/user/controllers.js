define([
	'angular',

	'User/Profile-Ctrl',
	'User/UserDetail-Ctrl',
	'User/UserCreate-Ctrl'
], function (angular) {
	'use strict';

	angular
		.module('User/Controllers', [
			'User/Ctrl/Profile',
			
			'User/Ctrl/UserCreate',
			'User/Ctrl/UserDetail'
		]);
});