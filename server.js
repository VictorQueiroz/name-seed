'use strict';

var sequelize = require('./app/config/sequelize'),
app = require('./app/config/express')(sequelize),
server = require('http').Server(app),
io = require('socket.io')(server),
controllers = require('./app/controllers'),
db = require('./app/models');

require('./app/config/passport')();

controllers['socket.io'](io);

db.sequelize.sync().complete(function(err){
	if(err)
		throw err[0];
	else
		server.listen(app.get('port'));
});

/**
 * Routes
 */
require('./app/routes')(app);

module.exports = app;