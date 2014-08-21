'use strict';

var controllers = require('../controllers'),
passport = require('passport'),
models = require('../models'),
faker = require('faker');

module.exports = function (app, io) {
	var ctrl = controllers.messages;

	app
		.route('/api/messages/seed')
		.get(ctrl.seed);

	app
		.route('/api/messages/:id')
		.get(ctrl.get)
		.put(ctrl.update)
		.delete(ctrl.destroy);

	app
		.route('/api/messages')
		.get(ctrl.list)
		.post(ctrl.store);
};