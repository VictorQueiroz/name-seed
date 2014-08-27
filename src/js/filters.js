(function () {
	'use strict';

	angular
		.module('App/Filters', [])

		.config(function () {
			console.log('Configuring module App/Filters...');
		})

		.run(function () {
			console.log('Running module App/Filters...');
		});
})();