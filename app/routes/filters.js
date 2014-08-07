'use strict';

exports.authenticated = function (req, res) {
	if(!req.isAuthenticated())
		res.status(404).redirect('/');
};

exports.administrator = function (req, res) {
	exports.authenticated();
};

exports.owner = function (req, res) {
	exports.authenticated();
};

exports.user = function (req, res) {
	exports.authenticated();
};