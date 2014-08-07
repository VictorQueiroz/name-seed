'use strict';

var sequelize = require('./app/config/sequelize'),
app = require('./app/config/express')(sequelize),
server = require('http').Server(app),
io = require('socket.io')(server),
controllers = require('./app/controllers');

require('./app/config/passport')();

controllers['socket.io'](io);

server.listen(app.get('port'));

/**
 * Routes
 */
require('./app/routes')(app);

module.exports = app;