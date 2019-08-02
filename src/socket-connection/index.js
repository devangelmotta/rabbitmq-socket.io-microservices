const server = require('../server');

var io = require('socket.io').listen(server);

module.exports = io;