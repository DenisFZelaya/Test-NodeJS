var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydbnode'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Conected!!');
    var sql = 'CREATE TABLE costumers (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table created');
    });
});