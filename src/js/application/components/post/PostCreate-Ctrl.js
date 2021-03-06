define(['angular'], function (angular) {
	'use strict';

	angular
		.module('Post/Ctrl/PostCreate', [])

		.controller('PostCreateCtrl', ['$scope', '$location', '$socket', 'Post', function ($scope, $location, $socket, Post) {
			$scope.post = new Post();

			$scope.storePost = function (post) {
				post
					.$save()
					.then(function(post) {
						if(post) {
							$socket().then(function(socket) {
								socket.emit('post new', post.id);
							});
							
							$location.path('/posts/' + (post.id ? post.id : ''));
						}
					});
			};
		}]);
});