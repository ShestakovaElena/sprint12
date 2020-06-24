const express = require('express');

const path = require('path');

const { PORT = 3000 } = process.env;
const cardsArr = require('./routes/cards');

const usersArr = require('./routes/users');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cardsArr);
app.use('/users', usersArr);

app.use('/', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT); // eslint-disable-line