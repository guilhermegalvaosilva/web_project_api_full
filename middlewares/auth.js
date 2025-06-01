const jwt = require("jsonwebtoken");

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Autorização necessária" });
  }

  const token = authorization.replace("Bearer ", "");

  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === "production" ? JWT_SECRET : "dev-secret"
    );
  } catch (err) {
    return res.status(401).send({ message: "Token inválido" });
  }

  req.user = payload; // salva o _id do usuário no request
  next();
};

app.post("/signup", createUser);
app.post("/signin", login);

// Todas as rotas abaixo são protegidas por token
app.use(auth);

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
