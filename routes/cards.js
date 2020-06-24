const cardsRouter = require("express").Router();
const path = require("path");

const cards = require(path.join(__dirname, '../data/cards.json'));

cardsRouter.get('/', (req, res) => {
  res.send(cards);
});


module.exports = cardsRouter;