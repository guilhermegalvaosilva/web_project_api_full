const Card = require("../models/card");

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: "Card não encontrado" });
      }

      // Verifica se o usuário dono do card é o mesmo que está tentando deletar
      if (card.owner.toString() !== req.user._id) {
        return res
          .status(403)
          .send({ message: "Você não pode deletar este card" });
      }

      return card
        .deleteOne()
        .then(() => res.send({ message: "Card deletado com sucesso" }));
    })
    .catch(next);
};
