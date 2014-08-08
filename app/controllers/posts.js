'use strict';

var models = require('../models'),
Post = models.Post,
User = models.User,
passport = require('passport');

exports.list = function (req, res) {
	Post
		.findAll({
			include: [{
				model: User
			}]
		})
		.success(function (posts) {
			if(posts)
				res.json(posts);
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	Post
		.find({
			where:{
				id: id
			},
			include: [
				{model: User}
			]
		})
		.success(function(post) {
			if(post)
				res.json(post);
		});
};

exports.store = function (req, res) {
	var data = req.body;

	Post.create({
		title: data.title,
		body: data.body,
		user_id: req.user.id
	}).complete(function(err, post) {
		if(post)
			res.json(post);
	});
};

exports.update = function (req, res) {
	var id = req.params.id;
	var data = req.body;

	Post
		.findById(id)
		.success(function(err, post) {
			Object.keys(data).forEach(function(key) {
				if(post[key] != 'undefined')
					post[key] = data[key];
			});

			post.save();

			res.json(post);
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	Post
		.findById(id)
		.success(function(err, post) {
			if(post.remove())
				res.json({result: true});
			else
				res.json({result: false});
		});
};