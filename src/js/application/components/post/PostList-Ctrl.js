define(['angular'], function (angular) {
	'use strict';

	angular
		.module('Post/Ctrl/PostList', [])

		.controller('PostListCtrl', ['$scope', '$location', '$socket', 'Post', function ($scope, $location, $socket, Post) {
			$scope.$watch('paginator.perPage', function(perPage) {
				$scope.$broadcast('posts paginator reload');
			});

			$scope.$on('posts page changed', function(event, page, paginator) {
				if(paginator.perPage < 1) {
					paginator.perPage = 4;
				}

				Post.list({
					page: page,
					per_page: paginator.perPage
				}).$promise.then(function(pag) {
					$scope.posts = pag.data;
					angular.extend(paginator, pag);
				});
			});

			$socket().then(function(socket) {
				socket.on('post new', function(post) {
					console.log(post);
					
					$scope.$broadcast('posts paginator reload');
				});
			});

			$scope.editPost = function (post) {
				$location.path('/posts/' + post.id + '/edit');
			};
		}]);
});