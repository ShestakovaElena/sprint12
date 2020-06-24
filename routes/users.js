const usersRouter = require("express").Router();
const path = require("path");

const users = require(path.join(__dirname, '../data/users.json'));

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item._id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = usersRouter;