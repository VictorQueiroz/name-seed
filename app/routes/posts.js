'use strict';

var controllers = require('../controllers'),
passport = require('passport');

module.exports = function (app) {
	var ctrl = controllers.posts;

	app.route('/api/posts').get(ctrl.list);
	app.route('/api/posts/:id').get(ctrl.get);
	app.route('/api/posts').post(ctrl.store);
	app.route('/api/posts/:id').put(ctrl.update);
	app.route('/api/posts/:id').delete(ctrl.destroy);
};