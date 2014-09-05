define([
	'angular',

	'Post/PostList-Ctrl',
	'Post/PostDetail-Ctrl',
	'Post/PostCreate-Ctrl',
	'Post/PostEdit-Ctrl'
], function (angular) {
	'use strict';

	angular
		.module('Post/Controllers', [	
			'Post/Ctrl/PostList',
			'Post/Ctrl/PostDetail',
			'Post/Ctrl/PostCreate',
			'Post/Ctrl/PostEdit'
		]);
});