const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    enum: ['Bay', 'Singleton', 'Bay and Singleton', 'Not Available'],
    required: true
  },
  bookmark: {
    type: Boolean,
    required: true
  }
});

module.exports = bookSchema;
