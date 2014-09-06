define(['angular'], function (angular) {
	'use strict';

	angular
		.module('Post/Routes', [])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/posts', {
					templateUrl: 'post/list.tpl.html',
					controller: 'PostListCtrl'
				})

				.when('/posts/create', {
					templateUrl: 'post/create.tpl.html',
					controller: 'PostCreateCtrl'
				})

				.when('/posts/:id', {
					templateUrl: 'post/show.tpl.html',
					controller: 'PostDetailCtrl'
				})

				.when('/posts/:id/edit', {
					templateUrl: 'post/edit.tpl.html',
					controller: 'PostEditCtrl'
				});
		}]);
});