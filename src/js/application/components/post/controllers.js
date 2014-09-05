define([
	'angular',

	'./PostList-Ctrl',
	'./PostDetail-Ctrl',
	'./PostCreate-Ctrl',
	'./PostEdit-Ctrl'
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