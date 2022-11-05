const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: [String],
        required: false
    },
    image: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('Post', postsSchema)

module.exports = Post