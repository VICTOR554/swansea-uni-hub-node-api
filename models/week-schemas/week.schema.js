const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weekSchema = new Schema({
    number: {
        type: Number,
        unique:true
    },
    dates: [{
        type: Number,
    }],
})


module.exports = weekSchema