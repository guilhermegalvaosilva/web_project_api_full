// Importações
const express = require("express");
const { createUser, login } = require("./controllers/users");
const auth = require("./middlewares/auth");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rotas públicas (não requerem autenticação)
app.post("/signup", createUser);
app.post("/signin", login);

// Middleware de autenticação — tudo abaixo requer JWT
app.use(auth);

// Rotas protegidas
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

// Rota 404
app.use((req, res) => {
  res.status(404).send({ message: "A solicitação não foi encontrada" });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// REMOVER ESSE TRECHO CASO EXISTA:
app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133",
  };
  next();
});
