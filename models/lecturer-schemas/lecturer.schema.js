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
  moduleCode: {
    type: String,
    required: true
  },
  officeHour: [
    {
      startDateTime: {
        type: Number
      },
      endDateTime: {
        type: Number
      }
    }
  ]
});

module.exports = lecturerSchema;
