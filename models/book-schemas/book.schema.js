const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    enum: ['Bay', 'Singleton', 'Bay and Singleton', 'Not available'],
    required: true
  },
  bookmarked: {
    type: Boolean,
    required: true
  }
});

module.exports = bookSchema;
