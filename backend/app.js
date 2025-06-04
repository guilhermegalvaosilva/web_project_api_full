import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { errors } from "celebrate";
import dotenv from "dotenv";

dotenv.config();

// Carrega variáveis de ambiente com fallback
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const config = {
  JWT_SECRET: process.env.JWT_SECRET || "seguro-mas-nao-producao",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/aroundb",
};

if (process.env.NODE_ENV === "production") {
  if (!process.env.JWT_SECRET || !process.env.MONGO_URI) {
    throw new Error("❌ Variáveis de ambiente obrigatórias faltando em produção!");
  }
}

// Express e __dirname compatível com ES Modules
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { PORT = 7000 } = process.env;

// Imports
import { login, createUser } from "./controllers/users.js";
import auth from "./middlewares/auth.js";
import { requestLogger, errorLogger } from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import usersRouter from "./routes/users.js";
import cardsRouter from "./routes/cards.js";
import { validateLogin, validateCreateUser } from "./validators/usersValidator.js";

// Middlewares
app.use(cors()); // Cuidado: ajuste para produção
app.use(express.json());

// MongoDB
mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB com sucesso"))
  .catch((err) => console.error("❌ Erro na conexão com MongoDB:", err));

// Logs
app.use(requestLogger);

// Crash test
app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("O servidor travará agora");
  }, 0);
});

// Rotas públicas
app.post("/signin", validateLogin, login);
app.post("/signup", validateCreateUser, createUser);

// Rotas protegidas
app.use("/users", auth, usersRouter);
app.use("/cards", auth, cardsRouter);

// Logs de erro e handlers
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

// Rota 404 genérica
app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Inicialização
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
