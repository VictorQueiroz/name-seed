(function () {
	'use strict';

	var MODULE_NAME = 'App',
	MODULE_DEPENDENCIES = [
		'ngRoute',
		'ngAnimate',
		'ngSanitize',

		'ui.bootstrap',
		'mgcrea.ngStrap',	
		'pascalprecht.translate',
		'victorqueiroz.ngPaginator',

		'App/Routes',
		'App/Controllers',
		'App/Filters',
		'App/Directives',
		'App/Services',
		'App/Partials',

		'Auth'
	],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));
	});
})();