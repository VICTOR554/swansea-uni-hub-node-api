const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lecturer_name: {
    type: String
  },
  room_name: {
    type: String
  },
  student_number: {
    type: String,
    required: true
  },
  date: {
    start_date_time: {
      type: Number,
      required: true
    },
    end_date_time: {
      type: Number,
      required: true
    }
  },
  created_date_time: {
    type: Number,
    required: true
  }
});

module.exports = bookingSchema;
