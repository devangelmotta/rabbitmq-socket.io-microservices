const connect = require('../../../db/database');

async function getUsers(body){
    let stmt = "SELECT * FROM users"

    connect.query(stmt, function (error, results, fields) {
        let data = JSON.parse(JSON.stringify(results));
        if (error) return false;
      });
}

module.exports = {
    getUsers
}