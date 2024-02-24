const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdpdevs.mdyexiw.mongodb.net/database?retryWrites=true&w=majority`);
        console.log("Conexão ao banco de dados feita com sucesso!");
    } catch (error) {
        console.error("Ocorreu um erro ao acessar o banco de dados: ", error);
    }
};

module.exports = connectToDatabase;
