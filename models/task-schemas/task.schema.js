const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
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
  due_date_time: {
    type: Number,
    required: true
  },
  created_date_time: {
    type: Number,
    required: true
  },
  description: {
    type: String
    //required: true
  },
  flagged: {
    type: Boolean,
    required: true,
    default: false
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = taskSchema;
