const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedBackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const FeedBack = mongoose.model('FeedBack', FeedBackSchema);

module.exports = FeedBack;