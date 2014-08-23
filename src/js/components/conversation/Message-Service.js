(function () {
	'use strict';

	angular
		.module('Conversation/Service/Message', [])

		.factory('Message', ['$resource', function ($resource) {
			return $resource ('', {}, {
				'get': {url: '/api/messages/:id', params: {id: '@id'}, method: 'GET', isArray: false},
				'list': {url: '/api/messages', params: {}, method: 'GET', isArray: false},
				'save': {url: '/api/messages', params: {}, method: 'POST', isArray: false},
				'update': {url: '/api/messages/:id', params: {id: '@id'}, method: 'PUT', isArray: false},
				'destroy': {url: '/api/messages/:id', params: {id: '@id'}, method: 'DELETE', isArray: false}
			});
		}]);
})();