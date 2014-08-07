'use strict';

angular.module('Post/Ctrl/PostDetail', [
	'ngRoute',

	'Post/Service'
])

.controller('PostDetailCtrl', ['$scope', '$routeParams', 'Post', function ($scope, $routeParams, Post) {
	var post = $scope.post = Post.get({ id: $routeParams.id });
}]);