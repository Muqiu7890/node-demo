var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'students'
});

connection.connect();

connection.query('select * from users', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end();