const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema({
    studentNumber: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    initialdate: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

module.exports = reportSchema