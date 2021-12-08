const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lecturerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  module_code: {
    type: String,
    required: true
  },
  officeHour: [
    {
      start_date_time: {
        type: Number
      },
      end_date_time: {
        type: Number
      }
    }
  ]
});

module.exports = lecturerSchema;
