const mongoose = require('mongoose');

// Importa o módulo mongoose, que é uma biblioteca do Node.js para modelagem de dados MongoDB.

const connectToDatabase = async () => {
    // Define uma função assíncrona chamada connectToDatabase, que será responsável por estabelecer a conexão com o banco de dados MongoDB.

    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdpdevs.mdyexiw.mongodb.net/database?retryWrites=true&w=majority`);
        // Tenta estabelecer a conexão com o banco de dados MongoDB usando mongoose.connect. 
        // A URL de conexão é composta pela combinação de informações sensíveis armazenadas em variáveis de ambiente (MONGODB_USERNAME e MONGODB_PASSWORD), juntamente com o host e o nome do banco de dados.
        // A opção "retryWrites=true" indica que as operações de gravação serão automaticamente reatribuídas em caso de falha.
        // A opção "w=majority" especifica que as operações de escrita devem ser confirmadas em uma maioria dos nós do MongoDB.

        console.log("Conexão ao banco de dados feita com sucesso!");
        // Se a conexão for bem-sucedida, imprime uma mensagem indicando o sucesso.

    } catch (error) {
        console.error("Ocorreu um erro ao acessar o banco de dados: ", error);
        // Se ocorrer um erro durante a conexão, imprime uma mensagem de erro detalhada.
    }
};

module.exports = connectToDatabase;
// Exporta a função connectToDatabase para que ela possa ser utilizada em outros arquivos do projeto.
