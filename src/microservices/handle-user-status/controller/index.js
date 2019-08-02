const {io} = require('../../../server');

var socketEvent = require('./socket-events');

function dispatchEvents(){

    io.on('connection', function (socket) {
        socketEvent.userDisconnect(socket);
        socketEvent.getUsers(socket)
    });

    io.on('userEditing', function (socket) {
        socketEvent.editingFields(socket)
    })

    io.on('statusConnect', function (socket) {
        socketEvent.statusConnect(socket)
    })

    io.on('getDataUsers', function (socket) {
        let stmt = "SELECT * FROM users"

        connect.query(stmt, function (error, results, fields) {
            let data = JSON.parse(JSON.stringify(results));
            if (error) return 88;
            else socketEvent.getUsers(socket, results)
        });
        
    })

}



dispatchEvents();

module.exports = {
    dispatchEvents
}

