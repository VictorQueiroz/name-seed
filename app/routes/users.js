'use strict';

var controllers = require('../controllers'),
passport = require('passport'),
filters = require('./filters');

module.exports = function (app) {
	var ctrl = controllers.users;

	app.route('/api/users').get(ctrl.list);
	app.route('/api/users/:id').get(ctrl.get);
	app.route('/api/users').post(ctrl.store);
	app.route('/api/users/:id').put(ctrl.update);
	app.route('/api/users/:id').delete(ctrl.destroy);

	app.route('/auth/local').post(passport.authenticate('local'), function(req, res) {
		if(req.user)
			res.json({result: true});
		else
			res.json({result: false});
	});

	app.route('/auth/check').get(function(req, res, next) {
		if(req.isAuthenticated())
			res.json({result: true, user: req.user});
		else 
			res.json({result: false});
	});

	app.route('/auth/destroy').get(function(req, res, next) {
		req.logout();
		res.redirect('/');
	});
};