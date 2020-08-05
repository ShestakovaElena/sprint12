const usersRouter = require('express').Router();

const users = require('../data/users.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = usersRouter;
