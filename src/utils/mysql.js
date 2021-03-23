const mysql = require('mysql');
const co = require('co-mysql');
const mysqlConfig = require('./../configs/db/mysql');
let conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'monitor',
    timezone: mysqlConfig.timezone
})
module.exports = co(conn)