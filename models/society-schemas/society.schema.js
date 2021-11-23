const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const societySchema = new Schema({
  student_number: {
    type: String
  },
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
  attending: {
    type: Boolean,
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
    }
  }
});

module.exports = societySchema;
