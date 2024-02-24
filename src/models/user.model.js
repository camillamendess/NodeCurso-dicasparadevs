const mongoose = require('mongoose');

// Importa o módulo mongoose, que é uma biblioteca do Node.js que fornece uma solução de modelagem de dados baseada em esquemas para o MongoDB.

const userSchema = new mongoose.Schema({
    // Define um esquema de usuário usando mongoose.Schema, que descreve a estrutura dos documentos que serão armazenados no MongoDB.

    firstName: {
        type: String, 
        required: true,
    },
    // Define uma propriedade "firstName" no esquema do usuário, que é uma String e é obrigatória (required: true).

    lastName: {
        type: String,
        required: true,
    },
    // Define uma propriedade "lastName" no esquema do usuário, que é uma String e é obrigatória (required: true).

    email: {
        type: String, 
        required: true,
    },
    // Define uma propriedade "email" no esquema do usuário, que é uma String e é obrigatória (required: true).

    password: {
        type: String,
        required: true,
        minlength: 7,
    },
    // Define uma propriedade "password" no esquema do usuário, que é uma String, é obrigatória (required: true) e deve ter pelo menos 7 caracteres (minlength: 7).
});

const UserModel = mongoose.model("User", userSchema);
// Cria um modelo de dados para usuários chamado "UserModel" usando mongoose.model, que é uma classe que cria uma instância de um modelo mongoose baseado em um esquema.

module.exports = UserModel;
// Exporta o modelo de usuário para que ele possa ser usado em outros arquivos do projeto.
