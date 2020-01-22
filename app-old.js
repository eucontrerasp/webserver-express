const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Eugenio',
            edad: 26,
            url: req.url
        }

        // res.write('Hola Mundo');
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(9090);

console.log('Escuchando el puerto 9090');