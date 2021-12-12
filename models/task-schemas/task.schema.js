const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  studentNumber: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  moduleCode: {
    type: String
  },
  createdDateTime: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  dueDateTime: {
    type: Number,
    required: true
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
}
);


module.exports = taskSchema;
