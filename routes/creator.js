const express = require('express');
const router = express.Router()
const CreatorController = require('../app/controllers/creator')

router.get('/getCreator/:id', CreatorController.get)
router.get('/getCreator', CreatorController.get)
router.post('/create', CreatorController.create)
router.post('/updateProfile/:id', CreatorController.updateProfile)
router.post('/action/follow/:id', CreatorController.follow)
router.post('/action/unfollow/:id', CreatorController.unfollow)
router.post('/isFollow/:id', CreatorController.isFollow)

module.exports = router