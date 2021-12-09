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
  lecturerName: {
    type: String
  },
  room_name: {
    type: String
  },
  studentNumber: {
    type: String,
    required: true
  },
  date: {
    startDateTime: {
      type: Number,
      required: true
    },
    endDateTime: {
      type: Number,
      required: true
    }
  },
  createdDateTime: {
    type: Number,
    required: true
  }
});

module.exports = bookingSchema;
