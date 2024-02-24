const express = require(`express`);
const UserModel = require('../src/models/user.model');

// Importa o módulo Express, que é um framework para Node.js que simplifica o processo de criação de aplicativos da web e APIs.

const app = express();

// Cria uma instância do aplicativo Express.

app.use(express.json());

// Configura o aplicativo para usar o middleware express.json, que permite que o aplicativo reconheça e analise objetos JSON em solicitações HTTP.

app.set("view engine", "ejs");
app.set("views", "src/views");

// Configura o aplicativo para usar o motor de visualização EJS (Embedded JavaScript), que permite a renderização de páginas HTML no lado do servidor, e define o diretório de visualizações como "src/views".

app.get("/views/users", async (req, res) => {
  // Define uma rota GET "/views/users" que renderiza uma visualização chamada "index" e passa um objeto contendo os usuários recuperados do banco de dados para essa visualização.
  const users = await UserModel.find({});
  res.render("index", { users });
})

app.get("/users", async (req, res) => {
  // Define uma rota GET "/users" que retorna todos os usuários do banco de dados em formato JSON.
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  // Define uma rota GET "/users/:id" que retorna um usuário específico com base no ID fornecido na solicitação.
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post('/users', async (req, res) => {
  // Define uma rota POST "/users" que cria um novo usuário com base nos dados fornecidos no corpo da solicitação.
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

app.patch("/users/:id", async (req, res) => {
  // Define uma rota PATCH "/users/:id" que atualiza parcialmente um usuário específico com base no ID fornecido na solicitação.
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  // Define uma rota DELETE "/users/:id" que exclui um usuário específico com base no ID fornecido na solicitação.
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

const port = 8080;

// Configura o aplicativo para ouvir as solicitações na porta 8080 e imprime uma mensagem no console indicando que o aplicativo está rodando.
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`))
