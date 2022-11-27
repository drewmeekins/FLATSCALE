const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
        name: {
            type: String, 
            required: true
        },
        comment: {
            type: String, 
            required: true
        },
        profile: {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        }
    },
    {timestamps: true}
)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment