'use strict';

angular.module('Post/Ctrl/PostCreate', [
	'ngRoute',

	'Post/Service'
])

.controller('PostCreateCtrl', ['$scope', '$location', 'Post', function ($scope, $location, Post) {
	$scope.storePost = function (post) {
		var post = new Post(post);

		post
			.$store()
			.then(function(post) {
				if(post)
					$location.path('/posts/' + (post._id ? post._id : null))
			});
	};
}]);