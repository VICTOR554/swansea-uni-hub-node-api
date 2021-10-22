const mongoose = require('mongoose')
const Schema = mongoose.Schema

const librarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bookmarked: {
        type: Boolean,
        required: true
    },
})

module.exports = librarySchema