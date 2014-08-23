(function () {
	'use strict';

	angular
		.module('Conversation/Service', ['ngResource'])

		.factory('Conversation', ['$resource', function ($resource) {
			return $resource ('', {}, {
				'get': {url: '/api/conversations/:id', params: {id: '@id'}, method: 'GET', isArray: false},
				'list': {url: '/api/conversations', params: {}, method: 'GET', isArray: false},
				'save': {url: '/api/conversations', params: {}, method: 'POST', isArray: false},
				'update': {url: '/api/conversations/:id', params: {id: '@id'}, method: 'PUT', isArray: false},
				'destroy': {url: '/api/conversations/:id', params: {id: '@id'}, method: 'DELETE', isArray: false}
			});
		}]);
})();