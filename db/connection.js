//require mysql2 package
const mysql = require('mysql2');

//connection setup
const connection = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'jasmine123',
    database: 'employee_tracker_db'
    },
    console.log('Connected to the employee_tracker_db database')
);

module.exports = connection;