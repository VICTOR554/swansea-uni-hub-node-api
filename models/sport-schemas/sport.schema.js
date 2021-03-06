const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
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
  contact: {
    email: {
      type: String,
      required: true
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    }
  }
});

module.exports = sportSchema;
