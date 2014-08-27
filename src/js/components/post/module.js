(function () {
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
})();