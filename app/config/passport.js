'use strict';

var passport = require('passport'),
		path = require('path'),
		User = require('../models').User;

module.exports = function() {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id, done) {
		User
			.find({
				where: {
					id: id
				}
			})
			.success(function(user) {
				done(null, user);
			});
	});

	require('./strategies/local')();
};