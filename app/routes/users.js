'use strict';

var controllers = require('../controllers'),
passport = require('passport'),
filters = require('./filters');

module.exports = function (app) {
	var ctrl = controllers.users;

	app.route('/api/users')
		.get(filters.administrator, ctrl.list)
		.post(ctrl.store);

	app.route('/api/users/:id')
		.get(ctrl.get)
		.put(filters.administrator, ctrl.update)
		.delete(filters.administrator, ctrl.destroy);

	app.route('/auth/local').post(filters.guest, passport.authenticate('local'), function(req, res) {
		if(req.isAuthenticated())
			res.json({result: true});
		else
			res.json({result: false});
	});

	app.route('/auth/facebook').get(filters.guest, passport.authenticate('facebook', {
		scope: ['email']
	}), function(req, res) {
		if(req.isAuthenticated())
			res.json({result: true});
		else
			res.json({result: false});
	});

	app.route('/auth/facebook/callback').get(filters.guest, passport.authenticate('facebook', {
		successRedirect: '/',
		failureRedirect: '/login'
	}));

	app.route('/auth/check').get(filters.authenticated, function(req, res, next) {
		if(req.isAuthenticated())
			res.json({result: true, user: req.user});
		else 
			res.json({result: false});
	});

	app.route('/auth/destroy').get(filters.authenticated, function(req, res, next) {
		req.logout();
		res.redirect('/');
	});
};