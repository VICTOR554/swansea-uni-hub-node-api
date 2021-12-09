const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const financeSchema = new Schema({
  student_number: {
    type: Number,
    required: true
  },
  tuition: {
    initial: {
      type: Number,
      required: true
    },
    payment: [
      {
        type: Number
      }
    ],
    remainder: {
      type: Number,
      required: true
    },
  },
  accomodation: {
    initial: {
      type: Number
    },
    payment: [
      {
        type: Number
      }
    ],
    remainder: {
      type: Number,
      required: true
    },
  }
});

module.exports = financeSchema;
