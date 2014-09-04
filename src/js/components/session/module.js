define([
	'angular',
	
	'services'
], function (angular) {
	'use strict';

	angular
		.module('Session', [
			'Session/Services'
		])

		.config(function () {
			console.log('Configuring module: Session...');
		})

		.run(function () {
			console.log('Running module: Session...');
		});
});