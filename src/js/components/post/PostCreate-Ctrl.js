'use strict';

angular.module('Post/Ctrl/PostCreate', [
	'ngRoute',

	'Post/Service'
])

.controller('PostCreateCtrl', ['$scope', '$location', '$io', 'Post', function ($scope, $location, $io, Post) {
	$scope.storePost = function (post) {
		var post = new Post(post);

		post
			.$store()
			.then(function(post) {
				if(post) {
					$io.socket.then(function(socket) {
						socket.emit('post new', post.id);
					});
					$location.path('/posts/' + (post.id ? post.id : ''))
				}
			});
	};
}]);