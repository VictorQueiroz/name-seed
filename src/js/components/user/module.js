(function () {
	'use strict';

	angular
		.module('User', [
			'ngRoute',

			'User/Controllers',
			'User/Services',
			'User/Routes'
		]);
})();