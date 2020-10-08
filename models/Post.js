const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

postModel = mongoose.model('Posts', postSchema)

module.exports = postModel