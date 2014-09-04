define(['angular', 'ngResource'], function (angular) {
	'use strict';

	angular
		.module('User/Service', ['ngResource'])

		.factory('User', ['$resource', function ($resource) {
			return $resource ('', {}, {
				'get': {url: '/api/users/:id', params: {id: '@id'}, method: 'GET', isArray: false},
				'list': {url: '/api/users', params: {}, method: 'GET', isArray: true},
				'save': {url: '/api/users', params: {}, method: 'POST', isArray: false},
				'update': {url: '/api/users/:id', params: {id: '@id'}, method: 'PUT', isArray: false},
				'destroy': {url: '/api/users/:id', params: {id: '@id'}, method: 'DELETE', isArray: false}
			});
		}]);
});