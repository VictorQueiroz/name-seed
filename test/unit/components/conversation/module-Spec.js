(function () {
	'use strict';

	var MODULE_NAME = 'Conversation',
	MODULE_DEPENDENCIES = [
		'Conversation/Controllers',
		'Conversation/Services',
		'Conversation/Directives'
	],
	MODULE_CONTROLLERS = [];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));
	});
})();