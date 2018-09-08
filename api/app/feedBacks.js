const express = require('express');
const FeedBack = require('../models/FeedBack');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const createRouter = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    FeedBack.find()
      .then(feedBacks => res.send(feedBacks))
      .catch(() => res.sendStatus(500));
  });

  router.post('/', [auth, permit('admin', 'user')], (req, res) => {
    const feedBack = new FeedBack(req.body);

    feedBack.save()
      .then(feedBack => res.send(feedBack))
      .catch(error => res.status(400).send(error));
  });

  return router;
};

module.exports = createRouter;