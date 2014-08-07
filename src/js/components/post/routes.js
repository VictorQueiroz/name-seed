'use strict';

angular.module('Post/Routes', [
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
		});
}]);