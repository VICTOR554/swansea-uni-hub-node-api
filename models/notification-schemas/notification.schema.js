const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      moduleCode: {
        type: String
      },
      lecturerName: {
        type: String,
      },
      description: {
        type: String
      },
      status: {
        type: String,
        enum: ["current", "past"],
        required: true
      },
      createdDateTime: {
        type: Number,
        required: true
      }
     
});

module.exports = notificationSchema;
