const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Jacques Cousteau",
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    default: "Explorer",
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    default: "https://pictures.s3.yandex.net/resources/avatar_1604080799.jpg",
    validate: {
      validator: (v) => validator.isURL(v),
      message: "URL do avatar inválida",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: "Email inválido",
    },
  },
  password: {
    type: String,
    required: true,
    select: false, // para esconder o hash na resposta
  },
});

module.exports = mongoose.model("User", userSchema);
