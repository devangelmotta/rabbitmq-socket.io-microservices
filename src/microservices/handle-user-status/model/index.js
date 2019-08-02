const connect = require('../../../db/database');

async function updateUserStatus(id, status){
    let stmt = `UPDATE users SET status=? WHERE id=?`;
    let data = [status, id];

    connect.query(stmt, data, function (error, results, fields) {
        if (error) return error
        
        else return results
      });
}

module.exports = {
    updateUserStatus
}