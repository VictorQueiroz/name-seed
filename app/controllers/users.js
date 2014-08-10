'use strict';

var models = require('../models'),
User = models.User,
passport = require('passport'),
_ = require('underscore-node'),
pagination = require('pagination');

exports.list = function (req, res) {
	var query = req.query;

	User
		.findAll()
		.success(function (users) {
			if(users) {
				var paginator = new pagination.SearchPagination({
					prelink: '/',
					current: (query.page ? query.page : 1),
					rowsPerPage: query.per_page ? query.per_page : 5,
					totalResult: users.length
				}).getPaginationData();

				var fromResult = paginator.fromResult;
				var toResult = paginator.toResult;

				paginator.data = users.slice((fromResult - 1), toResult);

				res.json(paginator);				
			}
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
	var data = _.pick(req.body,
		'username',
		'email',
		'name',
		'password'
	);

	User
		.create(data)
		.success(function(user) {
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