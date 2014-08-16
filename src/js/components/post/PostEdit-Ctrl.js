(function () {
	'use strict';

	angular
		.module('Post/Ctrl/PostEdit', ['ngRoute', 'Post/Service'])

		.controller('PostEditCtrl', ['$scope', '$routeParams', 'Post', function ($scope, $routeParams, Post) {
			$scope.post = Post.get({ id: $routeParams.id });

			$scope.updatePost = function (post) {
				post
					.$update()
					.then(function (post) {
						console.log(post)
					});
			};
		}]);
})();