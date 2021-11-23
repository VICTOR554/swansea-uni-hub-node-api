const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: string,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  event: {
    type: [String],
    required: true
  },
  training_time: {
    time: {
        type: [String],
        required: true
      },
      location_name: {
        type: [String],
        required: true
      },
  },
  contact: {
    email: {
      type: String,
      required: true
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    }
  }
});

module.exports = sportSchema;
