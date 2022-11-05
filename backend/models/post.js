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
    // include userId to match with profile model id
    // can retrieve users' post to show on specific profile
    // when logged in fetch posts via routes
})

const Post = mongoose.model('Post', postsSchema)

module.exports = Post