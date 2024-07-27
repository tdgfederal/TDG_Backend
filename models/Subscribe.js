const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('subscribe', blogSchema)