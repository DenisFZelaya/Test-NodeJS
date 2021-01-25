var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log('Host: ' + q.host);
console.log('Path: ' + q.pathname);
console.log('Search: ' + q.search);

var qdata = q.query;

//console.log('Arreglo de search: ' + qdata);
console.log('Get month: '  + qdata.month);

/*
    Divide el contenido de la url en sus partes
        Host
        Path
        Search
*/