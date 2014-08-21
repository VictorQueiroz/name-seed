(function () {
	'use strict';

	angular
		.module('Message/Service', ['ngResource'])

		.factory('Message', ['$resource', function ($resource) {
			return $resource ('', {}, {
				'get': {url: '/api/messages/:username', params: {username: '@username'}, method: 'GET', isArray: false},
				'list': {url: '/api/messages', params: {}, method: 'GET', isArray: false},
				'save': {url: '/api/messages', params: {}, method: 'POST', isArray: false},
				'update': {url: '/api/messages/:id', params: {id: '@id'}, method: 'PUT', isArray: false},
				'destroy': {url: '/api/messages/:id', params: {id: '@id'}, method: 'DELETE', isArray: false}
			});
		}]);
})();