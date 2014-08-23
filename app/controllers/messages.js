'use strict';

var Sequelize = require('sequelize'),
passport = require('passport'),
faker = require('faker'),
_ = require('underscore-node');

var models = require('../models'),
Message = models.Message,
User = models.User,
Conversation = models.Conversation;

exports.seed = function (req, res) {
  for(var i=0; i<10; i++) {
  	User
		  .create({
		    name: faker.Name.findName(),
		    email: faker.Internet.email(),
		    password: '123456789',
		    username: faker.Internet.userName()
		  })

		  .success(function (user) {
			  Conversation
			  	.create({
			  		title: faker.Lorem.sentences(3)
			  	})

			  	.success(function (conversation) {
				  		Message
				  			.create({
				  				content: faker.Lorem.sentences(5)
				  			})

				  			.success(function (message) {
				  				conversation.addMember(user).success(function () {
					  				conversation.addMessage(message).success(function (conversation) {
						  				message.setAuthor(user).success(function (message) {
						  					Conversation.find({
						  						where: {
						  							id: conversation.id
						  						},

						  						include: [
						  							{ model: User, as: 'Members' },
						  							{ model: Message, as: 'Messages', include: [
						  									{ model: User, as: 'Author', attributes: ['name', 'id'] }
							  							]
							  						}
						  						]
						  					}).success(function (conversation) {
						  						res.json(conversation);
						  					});
						  				})
					  				})
				  				})
				  			});			  			
			  	});
		  });			
	}
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
			order: 'created_at',
      include: [
      	{ model: User, as: 'Author' }
      ],
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

	User
		.find({
			where: {
				id: id
			}
		})

		.success(function (user) {
			Message
				.find({
					where: {
						id: user.id
					},

		      include: [
		      	{ model: User, as: 'Author' },
		      	{ model: Conversation, as: 'Conversation' },
		      ],
				})
				.success(function(message) {
					if(message) {
						res.json(message);
					}
				});			
		})
};

exports.store = function (req, res) {
	var data = _.pick(req.body,
		'content',
		'conversation_id'
	);

	if(!data.conversation_id) {
		res.json ({ result: false });
	}

	var author_id = req.user.id;

	Conversation
		.find({
			where: {
				id: data.conversation_id
			},
		})

		.success(function (conversation) {
			Message
				.create(_.pick(req.body, 'content'))
				.success(function (message) {
					User
						.find({
							where: {
								id: author_id
							}
						})

						.success(function (user) {
							message.setAuthor(user).success(function () {
								conversation.addMessage(message).success(function () {
									Message
										.find({
											where: {
												id: message.id
											},

											include: [
												{ model: User, as: 'Author' }
											]
										})

										.success(function (message) {
											res.json(message);
										});
								});
							});
						});
				});
		});
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