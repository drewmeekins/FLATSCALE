const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile