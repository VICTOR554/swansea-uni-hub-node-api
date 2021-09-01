const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    studentNumber: {
        type: Number,
        required: true
    },
    moduleCode: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    dateTime: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

module.exports = noteSchema