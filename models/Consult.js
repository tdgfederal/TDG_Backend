const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    // dob: {
    //     type: Date,
    //     required: true,
    // },
    // time: {
    //     type: String,
    //     required: true,
    // },
    // mode: {
    //     type: String,
    //     required: true,
    // },
    reason: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    hear: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('consult', blogSchema)