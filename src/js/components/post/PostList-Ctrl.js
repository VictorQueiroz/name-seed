(function () {
	'use strict';

	angular
		.module('Post/Ctrl/PostList', [
			'ngSocketIO',
			'ngMoment',

			'Post/Service'
		])

		.controller('PostListCtrl', ['$scope', '$location', '$socket', '$moment', 'Post', function ($scope, $location, $socket, $moment, Post) {
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
					$moment().then(function(moment) {
						$scope.posts = pag.data;

						Object.keys($scope.posts).forEach(function (key) {
							var post = $scope.posts[key];

							post.created_at = moment(post.created_at).fromNow();
						});
					});

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
})();