'use strict';

var Sequelize = require('sequelize'),
passport = require('passport'),
faker = require('faker'),
_ = require('underscore-node');

var models = require('../models'),
Message = models.Message,
User = models.User,
Conversation = models.Conversation;

exports.list = function (req, res) {
	var query = req.query;

	query.page = parseInt(query.page ? query.page : 1);
	query.per_page = query.per_page ? query.per_page : 4;

	var offset = (query.page - 1) * (query.per_page),
	limit = parseInt(query.per_page);

	Conversation
		.findAndCountAll({
			limit: limit,
			offset: offset,
			order: 'updated_at DESC',
		})

		.success(function(result) {
			var conversations = result.rows,
			count = result.count;

			res.json({
				current: query.page,
				pageCount: Math.ceil((count / limit - 1) + 1),
				count: count,
				data: conversations
			});			
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	Conversation
		.find({
			where: {
				id: id
			},

			order: [
				[{
					model: Message,
					as: 'Messages'
				}, 'created_at', 'DESC']
			],

			include: [
				{ model: User, as: 'Members' },
				{ model: Message, as: 'Messages', include: [
						{ model: User, as: 'Author', attributes: ['name'] }
					]
				},
			]
		})

		.success(function (conversation) {
			if(conversation) {
				res.json(conversation);
			}
		});
};

exports.store = function (req, res) {
	var data = _.pick(req.body,
		'title'
	);

	data.author_id = req.user.id;

	Conversation
		.create(data)
		.success(function (conversation) {
			User
				.find({
					where: {
						id: req.user.id
					}
				})

				.success(function (user) {
					conversation.addMember(user).success(function () {
						Conversation
							.find({
								where: {
									id: conversation.id
								},

								include: [{
									model: User, as: 'Members'
								}]
							})

							.success(function (conversation) {
								res.json(conversation);
							});
					});
				})
		})
};

exports.update = function (req, res) {
	var id = req.params.id;
	var data = _.pick(req.body, 'title', 'body');
	var where = {
		id: id,
		user_id: req.user.id
	};

	Message
		.update(data, where)
		.success(function() {
			Message
				.find({	id: id })
				.success(function(message) {
					if(message) {
						res.json(message);
					}
				});
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	Message
		.destroy({ id: id })
		.success(function() {
			Message.find({ id: id })
			.success(function(message) {
				if(!message) {
					res.json({ result: true });
				} else {
					res.json({ result: false });
				};
			});
		});
};