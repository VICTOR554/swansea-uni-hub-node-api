const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({
    studentNumber: {
        type: Number,
        required: true
    },
    tuition: {
        initial: {
            type: Number,
            // required: true
        payment: [{
            type: Number,
        }],
    },
    accomodation: {
        initial: {
            type: Number,
            // required: true
        },
        payment: [{
            type: Number,
        }],
    },
   
  
})


module.exports = financeSchema;