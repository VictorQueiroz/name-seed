'use strict';

var models = require('../models'),
User = models.User,
passport = require('passport');

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
		.find({
			where:{
				id: id
			}
		})
		.success(function(user) {
			if(user)
				res.json(user);
		});
};

exports.store = function (req, res) {
	var data = req.body;

	User.create({
		username: data.username,
		email: data.email,
		name: data.name,
		password: data.password
	}).complete(function(err, user) {
		if(user)
			res.json(user);
	});
};

exports.update = function (req, res) {
	var id = req.params.id;
	var data = req.body;

	User
		.findById(id)
		.success(function(err, user) {
			Object.keys(data).forEach(function(key) {
				if(user[key] != 'undefined')
					user[key] = data[key];
			});

			user.save();

			res.json(user);
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	User
		.findById(id)
		.success(function(err, user) {
			if(user.remove())
				res.json({result: true});
			else
				res.json({result: false});
		});
};