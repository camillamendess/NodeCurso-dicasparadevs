const fs = require("fs");
const path = require("path");

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
        return console.log("Erro ", Error);
    }

    console.log("Arquivo criado com sucesso!");
});

// Adicionar à um arquivo (MODIFICAR)
fs.appendFile(path.join(__dirname, "/test", "test.html"), "Hello, World", (Error) => {
    if (Error) {
        return console.log("Erro: ", Error);
    }

    console.log("Arquivo modificado com sucesso!");
})

// Ler um arquivo
fs.readFile(path.join(__dirname, '/test', 'test.html'), 'utf8', (error, data) => {
    if (error) {
        console.log("Erro: ", error);
    }

    console.log(data)
});

