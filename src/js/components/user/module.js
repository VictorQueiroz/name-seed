(function () {
	'use strict';

	angular
		.module('User', [
			'ngRoute',
			'Session',

			'User/Controllers',
			'User/Services',
			'User/Routes'
		]);
})();