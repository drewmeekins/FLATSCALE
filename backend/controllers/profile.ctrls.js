const bcrypt = require('bcrypt')
const session = require('express-session')
const { Profile } = require('../models')

const db = require('../models')
const router = require('../routes')

// profile index route
const index = (req, res) => {
    db.Profile.find({}, (error, profiles) => {
        if(error) return res.status(404).json({ error: error.message })
        return res.status(200).json({
            profiles,
            requestedAt: new Date().toLocaleString()
        })
    })
}

// profile id route
const getById = (req, res) => {
    db.Profile.find({ profileId: req.params.id }, (error, profiles) => {
        if(error) return res.status(404).json({ error: error.message })
        return res.status(200).json({
            profiles,
            requestedAt: new Date().toLocaleString()
        })
    })
}

// profile create route
// const create = (req, res) => {
//     db.Profile.create(req.body, (error, createProfile) => {
//         if(error) return res.status(404).json({ error: error.message })
//         return res.status(200).json(createProfile)
//     })
// }

const create = (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    console.log(req.body)

    Profile.findOne({username: req.body.username}, (err, userExists) => {
        if(userExists) {
            res.send('That username is taken')
        }else{
            db.Profile.create(req.body, (err, createdUser) => {
                console.log('User is created:', createdUser)
                res.redirect('/')
            })
        }
    })
}

// sign in post route
const signIn = (req, res) => {
    Profile.findOne({username: req.body.username}, (err,
        foundUser) => {
            if(foundUser){
                const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
                if(validLogin){
                    req.session.currentUser = foundUser
                    res.redirect(`/profile/${foundUser.username}`)
                }else{
                    res.send('Invalid username or password')
                }
            }else{
                res.send('Invalid username or password')
            }
        })
}

// profile destroy route
const destroy = (req, res) => {
    db.Profile.findByIdAndDelete(req.params.id, (error, deletedProfile) => {
        if(!deletedProfile) return res.status(400).json({ error: 'Profile Not Found' })
        if(error) return res.status(400).json({ error: error.message })
        return res.status(200).json({ message: `Profile: ${deletedProfile.username} deleted successfully` })
    })
}

// profile update route
const update = (req, res) => {
    db.Profile.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        { new: true },
        (err, updatedProfile) => {
            if(err) return res.status(400).json({ error: err.message })
            return res.status(200).json(updatedProfile)
        }
    )
}

module.exports = {
    index,
    getById,
    create,
    destroy,
    update
}
