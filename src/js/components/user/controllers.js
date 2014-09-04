define([
	'angular',

	'Profile-Ctrl',
	'UserDetail-Ctrl',
	'UserCreate-Ctrl'
], function (angular) {
	'use strict';

	angular
		.module('User/Controllers', [
			'User/Ctrl/Profile',	
			
			'User/Ctrl/UserList',
			'User/Ctrl/UserCreate',
			'User/Ctrl/UserDetail'
		]);
});