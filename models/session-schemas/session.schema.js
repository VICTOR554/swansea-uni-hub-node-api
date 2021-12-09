const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  startDate: {
    type: Number,
    unique: true
  },
  numberOfWeeks: {
    type: Number,
    required: true
  }
});

module.exports = sessionSchema;
