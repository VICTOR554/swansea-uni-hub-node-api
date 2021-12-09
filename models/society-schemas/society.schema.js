const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const societySchema = new Schema({
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

module.exports = societySchema;
