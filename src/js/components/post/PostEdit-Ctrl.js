(function () {
	'use strict';

	angular
		.module('Post/Ctrl/PostEdit', [
			'ngRoute',
			
			'Post/Service'
		])

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
})();