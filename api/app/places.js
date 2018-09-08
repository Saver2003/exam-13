const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const Place = require('../models/Place');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const config = require('../config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = () => {
  router.get('/', (req, res) => {
    Place.find()
      .then(results => res.send(results))
      .catch(() => res.sendStatus(500));
  });

  router.post('/', [auth, permit('admin'), upload.single('image')], (req, res) => {
    const placeData = req.body;

    if (req.file) {
      placeData.image = req.file.filename;
    } else {
      placeData.image = null;
    }

    const place = new Place(placeData);

    place.save()
      .then(result => res.send(result))
      .catch(error => res.status(400).send(error));
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.collection('places')
      .findOne({_id: new ObjectId(req.params.id)})
      .then(result => {
        if (result) res.send(result);
        else res.sendStatus(404);
      })
      .catch(() => res.sendStatus(500));
  });

  return router;
};

module.exports = createRouter;