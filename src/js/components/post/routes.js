(function () {
	'use strict';

	angular
		.module('Post/Routes', [
			'ngRoute',

			'Post/Controllers'
		])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/posts', {
					templateUrl: 'posts/list.tpl.html',
					controller: 'PostListCtrl'
				})

				.when('/posts/create', {
					templateUrl: 'posts/create.tpl.html',
					controller: 'PostCreateCtrl'
				})

				.when('/posts/:id', {
					templateUrl: 'posts/show.tpl.html',
					controller: 'PostDetailCtrl'
				})

				.when('/posts/:id/edit', {
					templateUrl: 'posts/edit.tpl.html',
					controller: 'PostEditCtrl'
				});
		}]);
})();