const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    officeHour: {
        startTime: {
            type: Number,
        },
        endTime: {
            type: Number,
        }
    }
})

module.exports = lecturerSchema