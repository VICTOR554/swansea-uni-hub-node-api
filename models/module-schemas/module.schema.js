const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moduleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    courseId: {
        type: Number,
        required: true
    }

})

module.exports = moduleSchema