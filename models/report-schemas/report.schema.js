const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  student_number: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  topic: {
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

module.exports = reportSchema;
