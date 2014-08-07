'use strict';

angular.module('Post/Ctrl/PostList', [
	'Post/Service'
])

.controller('PostListCtrl', ['$scope', 'Post', function ($scope, Post) {
	var posts = $scope.posts = Post.list();
}]);