const connect = require('../../../db/database');

async function updateUser(body){
    let stmt = `UPDATE users SET name=?, email=?, phone=?, birthday=?, status=? WHERE id=?`;
    let data = [body.name, body.email, body.phone, body.birthday, body.status, body.id];

    connect.query(stmt, data, function (error, results, fields) {
        if (error) return error
        
        else return results
      });
}

module.exports = {
    updateUser
}