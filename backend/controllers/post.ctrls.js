const db = require('../models')

// get all
const index = (req, res) => {
    db.Post.find({}, (error, posts) => {
        if(error) return res.status(404).json({ error: error.message })
        return res.status(200).json({
            posts,
            requestedAt: new Date().toLocaleDateString()
        })
    })
}

// find id
const getById = (req, res) => {
    db.Post.find({ postId: req.params.id }, (error, posts) => {
        if (error) return res.status(404).json({ error: error.message })
        return res.status(200).json({
            posts,
            requestedAt: new Date().toLocaleDateString(),
        })
    })
}

// create post route
const create = (req, res) => {
    db.Post.create(req.body, (error, createPost) => {
        if(error) return res.status(404).json({ error: error.message })
        return res.status(200).json(createPost)
    })
}
