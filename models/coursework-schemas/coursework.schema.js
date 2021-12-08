const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseWorkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  module_code: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  due_date: {
    type: Number,
    required: true
  }
});

module.exports = courseWorkSchema;
