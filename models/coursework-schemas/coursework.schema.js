const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseworkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  moduleCode: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  dueDateTime: {
    type: Number,
    required: true
  }
});

module.exports = courseworkSchema;
