const connect = require('../../../db/database');

exports.userDisconnect= (socket)=>{
    socket.on('disconnect', ()=>{console.log('User disconnected')});
};
 
exports.userConnect = (socket)=>{
    socket.on('connection', (data)=>{ console.log('User connected')});
};

exports.editingFields = (socket)=>{
    socket.on('onEditing', (data)=>{console.log(data) });
}; 

exports.statusConnect = (socket)=>{
    socket.on('statusConnect', (data)=>{console.log('User status connected. Id: ', data) });
}

exports.getUsers = (socket, users)=>{
    socket.on('getDataUsers', (data)=>{console.log('Received data: ', data) });
    let stmt = "SELECT * FROM users"

        connect.query(stmt, function (error, results, fields) {
            let users = JSON.parse(JSON.stringify(results));
            if (!error) socket.emit('getDataUsers', users);
            else socket.emit('getDataUsers', error);
        });
    
}

