var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'mydbnode'
});

con.connect(function (err) {
    if (err) throw err;
    var sql = 'SELECT * FROM costumers'
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result[2].name);
        console.log(result);
        console.log(fields);
    });
});

/*
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
*/