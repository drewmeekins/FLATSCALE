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

// destroy post
const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (error, deletedPost) => {
        if (!deletedPost) return res.status(400).json({ error: 'Post not found' })
        if (error) return res.status(400).json({ error: error.message })
        return res.status(200).json({ message: `Post ${deletedPost.title} deleted successfully!`})
    })
}

// update route
const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        { new: true },
        (err, updatedPost) => {
            if (err) return res.status(400).json({ error: err.message })
            return res.status(200).json(updatedPost)
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