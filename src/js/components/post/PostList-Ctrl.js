'use strict';

angular.module('Post/Ctrl/PostList', [
	'Post/Service',
	'App/Services'
])

.controller('PostListCtrl', ['$scope', '$io', 'Post', function ($scope, $io, Post) {
	$scope.$watch('paginator.perPage', function(perPage) {
		$scope.$broadcast('posts paginator reload');
	});

	$scope.$on('posts page changed', function(event, page, paginator) {
		if(paginator.perPage < 1)
			paginator.perPage = 4;

		Post.list({
			page: page,
			per_page: paginator.perPage
		}).$promise.then(function(pag) {
			$scope.posts = pag.data;
			angular.extend(paginator, pag);
			// paginator.perPage = $scope.posts.length;
		});
	});

	$io.socket.then(function(socket) {
		socket.on('post new', function(post) {
			$scope.$broadcast('posts paginator reload');
		});
	});	
}]);