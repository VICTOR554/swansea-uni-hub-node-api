const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  number: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  date_of_birth: {
    type: String,
    required: true
  },
  nationality: {
    type: String
    // required: true
  },
  telephone: {
    type: String
    // required: true
  },
  email: {
    type: String
    // required: true
  },
  address: {
    type: String
    // required: true
  },
  password: {
    type: String
    // required: true
  },
  home_campus: {
    type: String,
    enum: ['bay', 'singleton']
    // required: true,
  },
  department: {
    type: String
    // required: true,
  },
  course_id: {
    type: Number
    // required: true
  },
  degree: {
    type: String,
    enum: ['bachelor', 'master', 'Phd']
    // required: true
  },
  status: {
    type: String,
    enum: ['current', 'past']
    // required: true
  },
  enrollment: {
    type: Boolean,
    // required: true
  },
  course_duration: {
    start_date_time: {
      type: String
      // required: true
    },
    end_date_time: {
      type: String
      // required: true
    }
  },
  specialism: {
    type: String
  },
  modules: [
    {
      type: String
      // required: true
    }
  ]
});

module.exports = studentSchema;
