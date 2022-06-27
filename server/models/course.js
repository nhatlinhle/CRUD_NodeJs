const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const coursesSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
});

module.exports = mongoose.model('Course', coursesSchema);