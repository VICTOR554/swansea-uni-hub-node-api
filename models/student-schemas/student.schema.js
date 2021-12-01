const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
    type: String,
    required: true
  },
  telephone: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  home_campus: {
    type: String,
    enum: ['bay', 'singleton'],
    required: true
  },
  department: {
    type: String,
    // required: true,
  },
  degree: {
    type: String,
    enum: ['bachelor', 'master', 'Phd'],
    required: true
  },
  status: {
    type: String,
    enum: ['current', 'past'],
    required: true
  },
  enrollment: {
    type: Boolean,
    required: true
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
  course_code: {
    type: String,
    required: true
  },
  module_code: [
    {
      type: String,
      required: true
    }
  ],
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//encrypt password
studentSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//sign Json Web Token and return
studentSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

//Match student password with hashed password saved in the database
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = studentSchema  ;
