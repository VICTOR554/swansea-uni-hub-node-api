const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  module_code: {
    type: String,
    required: true
  },
  lecturer_name: {
    type: String,
    required: true
  },
  start_time: {
    type: Number,
    required: true
  },
  end_time: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Lecture', 'Seminar', 'Lab', 'Exam', 'Lecture/Seminar', 'Revision'],
    required: true
  }
});

module.exports = activitySchema;
