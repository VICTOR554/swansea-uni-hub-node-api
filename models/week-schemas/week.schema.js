const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weekSchema = new Schema({
  number: {
    type: Number,
    unique: true,
    required: true
  },
  dates: [
    {
      type: Number,
      required: true
    }
  ]
});

module.exports = weekSchema;
