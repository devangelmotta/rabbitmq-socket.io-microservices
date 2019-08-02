const connect = require('../../../db/database');

async function createUser(body){
    let stmt = `INSERT INTO users (name, email, phone, birthday, status) VALUES(?,?,?,?,?)`;
    let data = [body.name, body.email, body.phone, body.birthday, body.status];

    return connect.query(stmt, data, function (error, results, fields) {
        if (error) return false;
        else return results;
      });

}

module.exports = {
    createUser
}