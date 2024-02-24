const fs = require("fs");
const path = require("path");

// O módulo 'fs' (file system) é uma parte integrante do Node.js que fornece métodos para interagir com o sistema de arquivos do computador.

// Criar uma pasta 
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//     if (error) {
//         return console.log("Erro: ", error);
//     }

//     console.log("Pasta criada com sucesso!");
// })

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.html'), 'hello, Node ', (error) => {
    if (error) {
        return console.log("Erro ", error);
    }

    console.log("Arquivo criado com sucesso!");
});

// appendFile permite adicionar conteúdo a um arquivo existente
fs.appendFile(path.join(__dirname, "/test", "test.html"), "Hello, World", (error) => {
    if (error) {
        return console.log("Erro: ", error);
    }

    console.log("Arquivo modificado com sucesso!");
})

// readFile lê o conteúdo de um arquivo
fs.readFile(path.join(__dirname, '/test', 'test.html'), 'utf8', (error, data) => {
    if (error) {
        console.log("Erro: ", error);
    }

    console.log(data)
});
