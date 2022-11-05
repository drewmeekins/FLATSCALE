const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

// profile routes
router.get('/', ctrls.profile.index)
router.get('/:id', ctrls.profile.getById)
router.post('/:id', ctrls.profile.create)
router.delete('/:id', ctrls.profile.destroy)
router.put('/:id', ctrls.profile.update)

module.exports = router