var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content 03!' , function(err) {
    if(err) throw err;
    console.log('Saved!');
});

//Crear un archivo con el metodo writeFile