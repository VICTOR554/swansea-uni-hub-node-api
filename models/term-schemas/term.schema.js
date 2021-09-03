const mongoose = require('mongoose')
const Schema = mongoose.Schema

const termSchema = new Schema({
    number: {
        type: Number,
        enum: [1,2,3],
        required: true,
        unique: true
    },
    startWeek: {
        type: Number,
        required: true
    },
    endWeek: {
        type: Number,
        required: true
    },
})



module.exports = termSchema