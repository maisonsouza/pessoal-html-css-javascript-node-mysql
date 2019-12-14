// Importando o módulo HTTP
const http = require('http');

//Definindo o host e a porta do servidor
const hostname = '127.0.0.1';
const port = 3000;

//Criando o servidor
const server = http.createServer((req, res) => {
    //Configurando a resposta da requisição
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

//Escutando na porta especificada
server.listen(port, hostname, () => {
    //Utilizando data-biding para hostname e port
    console.log(`Server running at http://${hostname}:${port}/`);
});