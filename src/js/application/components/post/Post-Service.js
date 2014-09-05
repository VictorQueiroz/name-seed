define(['angular', 'ngResource'], function (angular) {
	'use strict';

	angular
		.module('Post/Service', ['ngResource'])

		.factory('Post', ['$resource', function ($resource) {
			return $resource ('', {}, {
				'get': {url: '/api/posts/:id', params: {id: '@id'}, method: 'GET', isArray: false},
				'list': {url: '/api/posts', params: {}, method: 'GET', isArray: false},
				'save': {url: '/api/posts', params: {}, method: 'POST', isArray: false},
				'update': {url: '/api/posts/:id', params: {id: '@id'}, method: 'PUT', isArray: false},
				'destroy': {url: '/api/posts/:id', params: {id: '@id'}, method: 'DELETE', isArray: false}
			});
		}]);
});