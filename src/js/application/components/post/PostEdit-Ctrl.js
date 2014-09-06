define(['angular'], function (angular) {
	'use strict';

	angular
		.module('Post/Ctrl/PostEdit', [])

		.controller('PostEditCtrl', ['$scope', '$location', '$routeParams', 'Post', function ($scope, $location, $routeParams, Post) {
			$scope.post = Post.get({ id: $routeParams.id });

			$scope.updatePost = function (post) {
				post
					.$update()
					.then(function () {
						$location.path('/posts');
					});
			};
		}]);
});