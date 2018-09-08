const express = require('express');
const User = require('../models/User');

const createRouter = () => {
  const router = express.Router();

  router.post('/', (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save()
      .then(user => res.send(user))
      .catch(error => res.status(400).send(error))
  });

  router.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
      return res.status(400).send({error: 'Username not found'});
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) {
      return res.status(400).send({error: 'Password is wrong!'});
    }

    user.generateToken();
    await user.save();

    return res.send({message: 'User and password correct!', user});
  });

  router.delete('/sessions', async (req, res) => {
    const token = req.get('Token');
    const success = {message: 'Logout success!'};

    if (!token) return res.send(success);

    const user = await User.findOne({token});

    if (!user) return res.send(success);

    user.generateToken();
    await user.save();

    return res.send(success);
  });

  return router;
};

module.exports = createRouter;