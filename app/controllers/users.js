'use strict';

var models = require('../models'),
User = models.User,
Role = models.Role,
passport = require('passport'),
_ = require('underscore-node');

exports.list = function (req, res) {
	User
		.findAll()
		.success(function (users) {
			if(users)
				res.json(users);
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	User
		.find({ id: id })
		.success(function(user) {
			if(user)
				res.json(user);
		});
};

exports.store = function (req, res) {
	var data = req.body;

	User
		.create(_.pick(data,
			'username',
			'email',
			'name',
			'password'
		))
		.complete(function(err, user) {
			if(user)
				res.json(user);
		});
};

exports.update = function (req, res) {
	var id = req.params.id;
	var data = req.body;

	User
		.update(_.pick(data, 'name', 'username', 'email'), { id: id })
		.success(function() {
			User
				.find({	id: id })
				.success(function(user) {
					if(user)
						res.json(user);
				});
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	User
		.destroy({ id: id })
		.success(function() {
			User.find({ id: id })
			.success(function(user) {
				if(!user)
					res.json({ result: true });
				else
					res.json({ result: false });
			});
		});
};