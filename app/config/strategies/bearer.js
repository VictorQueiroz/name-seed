'use strict';

var passport = require('passport'),
		BearerStrategy = require('passport-http-bearer').Strategy,
		User = require('../../models').User;

module.exports = function (req, res, next) {	
	passport.use(new BearerStrategy(
	  function(token, done) {
	    User.findOne({ token: token }, function (err, user) {
	      if (err) { return done(err); }
	      if (!user) { return done(null, false); }
	      return done(null, user, { scope: 'read' });
	    });
	  }
	));
};