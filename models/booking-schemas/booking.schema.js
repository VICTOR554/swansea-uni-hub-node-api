const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lecturerId: {
    type: String
  },
  studentId: {
    type: String,
    required: true
  },
  status: {
    type: string,
    required: true,
    enum: ['Booked', 'Not Booked'],
},
  date: {
    day: {
      type: String
    },
    startTime: {
      type: String
      // required: true
    },
    endTime: {
      type: String
      // required: true
    }
  }
});

module.exports = bookingSchema;
