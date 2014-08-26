(function () {
	'use strict';

	var MODULE_NAME = 'Conversation/Ctrl/ConversationList',
	MODULE_DEPENDENCIES = [
		'Conversation/Service',
		'App/Services'
	],
	MODULE_CONTROLLERS = [
		'ConversationListCtrl'
	];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));
	});
})();