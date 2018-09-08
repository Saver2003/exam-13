const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: String,
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;