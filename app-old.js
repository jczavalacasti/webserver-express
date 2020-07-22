const http = require('http');


http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'julio',
            edad: 25,
            url: req.url
        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8082);

console.log('Escuchando el puerto 8080');