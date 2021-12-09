const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Current', 'Past'],
    required: true
  },
  genre: [{
    type: String,
    required: true
  }],
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    start_date: {
      type: Number,
      required: true
    },
    end_date: {
      type: Number,
      required: true
    },
  },
  time: {
    start_time: {
      type: Number,
      required: true
    },
    end_time: {
      type: Number,
      required: true
    }
  },
});

module.exports = eventSchema;
