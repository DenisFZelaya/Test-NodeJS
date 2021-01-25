var http = require('http');


/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'}); //encabezado con el tipo de contenido
    res.write('Hola Mundo');
    res.write(req.url); // obtiene el parametro pasado por url
    res.end();
}).listen(8080);
*/

var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(req.url, true).query; //Parseando los parametros pasados por la url
    var txt = q.year + ' ' + q.month; //http://localhost:8080/?year=1998&month=febrero
    res.end(txt);
}).listen(8080);