const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseWorkSchema = new Schema({
  module_code: {
    type: String,
    required: true
  },
  lecturer_name: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  due_date: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number
  }
});

module.exports = courseWorkSchema;
