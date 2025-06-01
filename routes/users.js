const express = require("express");
const fs = require("fs");
const path = require("path");
const User = require("../models/user");

const router = express.Router();

// Rota: retornar usuário atual (requer token válido)
router.get("/me", (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user)
        return res.status(404).send({ message: "Usuário não encontrado" });
      res.send(user);
    })
    .catch(next);
});

module.exports = router;
