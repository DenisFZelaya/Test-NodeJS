var http = require('http');
var dt = require('./mymodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dt.myDateTime())
    res.end('Hello Word desde Node JS \n');
}).listen(8080);