'use strict';

var fs = require('fs');

fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file !== 'index.js');
	})
	.forEach(function(file) {
		exports[file.replace('.js', '')] = require('./' + file);
	});