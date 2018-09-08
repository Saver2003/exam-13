const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Place = require('./models/Place');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;
const collections = ['users', 'places'];

db.once('open', async () => {
  collections.forEach(async collectionName => {
    try {
      await db.dropCollection(collectionName);
    } catch (e) {
      console.log(`Collection ${collectionName} did not exist in DB`);
    }
  });

  await User.create({
    username: 'user',
    password: '123',
    role: 'user'
  }, {
    username: 'admin',
    password: '123',
    role: 'admin'
  });

  await Place.create({
    title: 'Ражий Кот',
    image: 'taverna_3.jpg'
  }, {
    title: 'Зеленый дракон',
    image: 'taverna_1.jpg'
  }, {
    title: 'У дороги',
    image: 'taverna_2.jpg'
  });

  db.close();
});

