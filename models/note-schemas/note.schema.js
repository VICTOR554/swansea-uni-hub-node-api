const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  student_number: {
    type: Number,
    required: true
  },
  module_code: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  created_date_time: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = noteSchema;
