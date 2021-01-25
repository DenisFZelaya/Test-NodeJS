var fs = require('fs');

fs.appendFile('minewfile1.txt', 'Hello content!' , function (err) {
    if(err) throw err;
    console.log('Saved!');
});

//Creara el archivo si no existe, y si existe le añadira el contenido cada vez que se ejecute.