const db = require('../models')

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
const create = (req, res) => {
    db.Profile.create(req.body, (error, createProfile) => {
        if(error) return res.status(404).json({ error: error.message })
        return res.status(200).json(createProfile)
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
