const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('blog', blogSchema)