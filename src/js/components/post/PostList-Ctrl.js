'use strict';

angular.module('Post/Ctrl/PostList', [
	'Post/Service'
])

.controller('PostListCtrl', ['$scope', 'Post', function ($scope, Post) {
	$scope.$on('page changed', function(event, page) {
		Post.list({ page: page }).$promise.then(function(paginator) {
			$scope.posts = paginator.data;
			$scope.paginator = paginator;
		});
	});
}]);