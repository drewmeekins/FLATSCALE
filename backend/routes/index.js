const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

// profile routes
router.get('/', ctrls.profile.index) // ----> don't really need this
router.get('/profile/:id', ctrls.profile.getById)
router.post('/profile', ctrls.profile.create)
router.delete('/profile/:id', ctrls.profile.destroy)
router.put('/profile/:id', ctrls.profile.update)

module.exports = router