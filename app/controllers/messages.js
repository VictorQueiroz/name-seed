'use strict';

var Sequelize = require('sequelize'),
models = require('../models'),
Message = models.Message,
User = models.User,
passport = require('passport'),
faker = require('faker'),
_ = require('underscore-node');

exports.seed = function (req, res) {
	var User = models.User,
	Message = models.Message;

  User
	  .create({
	    name: faker.Name.findName(),
	    email: faker.Internet.email(),
	    password: '123456789',
	    username: faker.Internet.userName()
	  })
	  .success(function (author) {
	    User
		    .create({
		      name: faker.Name.findName(),
		      email: faker.Internet.email(),
		      password: '123456789',
		      username: faker.Internet.userName()
		    })
		    .success(function (receiver) {
		      Message
			      .create({
			        content: faker.Lorem.sentences(30)
			      })
			      .success(function (message) {
			        message
			        	.setAuthor(author)
			        	.success(function (message) {
				        	message
				        		.setReceiver(receiver)
				        		.success(function (message) {
							        Message
								        .find({
								        	where: {
								        		id: message.id
								        	},

								        	include: [
								        		{ model: User, as: 'Author' },
								        		{ model: User, as: 'Receiver' }
								        	]
								        })
								        .success(function (message) {
								        	res.json(message)
								        });
					        	});
				        });
			      });
		    });
	  });			
};

exports.list = function (req, res) {
	var query = req.query;

	query.page = parseInt(query.page ? query.page : 1);
	query.per_page = query.per_page ? query.per_page : 4;

	var offset = (query.page - 1) * (query.per_page),
	limit = parseInt(query.per_page);

	Message
		.findAndCountAll({
			limit: limit,
			offset: offset,
			order: 'receiver_id DESC',
      include: [
      	{ model: User, as: 'Author' },
      	{ model: User, as: 'Receiver' }
      ],
      where: Sequelize.and(
      	{ author_id: req.user.id },
      	Sequelize.or(
      		{ receiver_id: req.user.id }
      	)      	
      )
		})

		.success(function(result) {
			var messages = result.rows,
			count = result.count;

			res.json({
				current: query.page,
				pageCount: Math.ceil((count / limit - 1) + 1),
				count: count,
				data: messages
			});			
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	Message
		.find({
			where: {
				id: id
			},

			include: [{
				model: User
			}]
		})
		.success(function(message) {
			if(message)
				res.json(message);
		});
};

exports.store = function (req, res) {
	var data = _.pick(req.body,
		'content',
		'receiver_id'
	);

	data.author_id = req.user.id;

	// Finding author.
	User
		.find({
			where: {
				id: data.author_id
			}
		})

		.success(function (author) {
			// Finding receiver.
			User
				.find({
					where: {
						id: data.receiver_id
					}
				})

				.success(function (receiver) {
					Message
						.create(data)
						.success(function(message) {
							// Set author user.
							message
								.setAuthor(author)
								.success(function (message) {
									// Set receiver user.
									message
										.setReceiver(receiver)
										.success(function (message) {
											// Return message.
											Message
												.find({
													where: {
														id: message.id
													},

													include: [
														{ model: User, as: 'Receiver' }
													]
												})
												.success(function (message) {
													res.json(message);
												});
										});
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