const http = require("http");

// Importa o módulo http, que fornece funcionalidades para criar servidores HTTP.

const port = 8080;

// Define a porta na qual o servidor HTTP será executado.

const server = http.createServer((req, res) => {
    // Cria um servidor HTTP usando http.createServer(), que recebe uma função de callback para lidar com solicitações e respostas HTTP.

    if (req.url === "/home") {
        // Verifica se a URL da solicitação é "/home".
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        // Define o cabeçalho da resposta indicando o status 200 (OK) e o tipo de conteúdo como HTML.
        res.end("<h1>home page</h1>");
        // Envia uma resposta contendo uma página HTML com o título "home page".
    }

    if (req.url === "/users") {
        // Verifica se a URL da solicitação é "/users".
        const users = [
            {
                name: 'John Doe',
                email: 'john@doe.com'
            }, 
            {
                name: 'Jane Doe',
                email: 'jane@doe.com'
            },
        ];
        // Cria um array de usuários fictícios.

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        // Define o cabeçalho da resposta indicando o status 200 (OK) e o tipo de conteúdo como JSON.

        res.end(JSON.stringify(users));
        // Envia uma resposta contendo os usuários no formato JSON.
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
// Inicia o servidor HTTP na porta especificada e imprime uma mensagem no console indicando que o servidor está rodando.
