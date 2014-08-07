'use strict';

var fs = require('fs'),
path = require('path');

module.exports = function (app) {
	fs
		.readdirSync(__dirname)
		.filter(function(file) {
			return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'filters.js');
		})
		.forEach(function(file) {
		  require('./'+file.replace('.js', ''))(app);
		});

	app.route('*').get(function(req, res) {
  	res.render('index');
  });
};