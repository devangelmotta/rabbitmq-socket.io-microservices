const connect = require('../../../db/database');

async function deleteUser(body){
    let stmt = `DELETE FROM users WHERE id =?`;
    let data = [body.id];

    return connect.query(stmt, data, function (error, results, fields) {
        if (error) return error;
        else return results;
      });
}

module.exports = {
    deleteUser
}