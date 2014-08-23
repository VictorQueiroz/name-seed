'use strict';

var controllers = require('../controllers'),
passport = require('passport'),
models = require('../models');

module.exports = function (app, io) {
	var ctrl = controllers.conversations;

	// app
	// 	.route('/api/conversations/seed')
	// 	.get(ctrl.seed);

	app
		.route('/api/conversations/:id')
		.get(ctrl.get)
		.put(ctrl.update)
		.delete(ctrl.destroy);

	app
		.route('/api/conversations')
		.get(ctrl.list)
		.post(ctrl.store);
};