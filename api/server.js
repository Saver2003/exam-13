const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./app/users');
const places = require('./app/places');
// const feedBacks = require('./app/feedBacks');

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Mongoose connected!');

  app.use('/places', places());
  app.use('/users', users());
  // app.use('/feedBacks', feedBacks());

  app.listen(port, (error) => {
    if (error) return console.error(`Server error ${error}`);
    console.log(`Server started on ${port} port!`);
  });
});