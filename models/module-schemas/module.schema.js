const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  course_id: {
    type: Number,
    required: true
  }
});

module.exports = moduleSchema;
