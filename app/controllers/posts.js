'use strict';

var models = require('../models'),
Post = models.Post,
User = models.User,
passport = require('passport'),
pagination = require('pagination'),
_ = require('underscore-node');

exports.list = function (req, res) {
	var query = req.query;

	Post
		.findAll({
			include: [{
				model: User
			}]
		})
		.success(function (posts) {
			if(posts) {
				var paginator = pagination.create('search', {
					prelink: '/',
					current: query.page ? query.page : 1,
					rowsPerPage: query.per_page ? query.per_page : 5,
					totalResult: posts.length
				}).getPaginationData();

				paginator.data = posts.slice((paginator.fromResult - 1), paginator.toResult);

				res.json(paginator);
			}
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	Post
		.find({ id: id })
		.success(function(post) {
			if(post)
				res.json(post);
		});
};

exports.store = function (req, res) {
	var data = _.pick(req.body,
		'title',
		'body'
	);

	Post
		.create(data)
		.success(function(post) {
			if(post)
				res.json(post);
		});
};

exports.update = function (req, res) {
	var id = req.params.id;
	var data = _.pick(req.body, 'title', 'body');

	Post
		.update(data, { id: id })
		.success(function() {
			Post
				.find({	id: id })
				.success(function(post) {
					if(post)
						res.json(post);
				});
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	Post
		.destroy({ id: id })
		.success(function() {
			Post.find({ id: id })
			.success(function(post) {
				if(!post)
					res.json({ result: true });
				else
					res.json({ result: false });
			});
		});
};