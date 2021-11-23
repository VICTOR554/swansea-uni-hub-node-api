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
  status: {
    type: string,
    required: true,
    enum: ['Booked', 'Unbooked'],
},
  date: {
    startTime: {
      type: Number,
      required: true
    },
    endTime: {
      type: Number,
      required: true
    }
  }
});

module.exports = bookingSchema;
