const express = require('express')
const router = express.Router()
const VideoController = require('../app/controllers/video')

router.get('/', VideoController.get)
router.delete('/:id', VideoController.delete)
router.get('/getVDByCreator/:id', VideoController.getVDByCreator)
router.post('/createContent', VideoController.create)
router.post('/action/like/:id', VideoController.like)
router.post('/action/dislike/:id', VideoController.disLike)
router.post('/action/follow/:id', VideoController.follow)
router.post('/action/followed/:id', VideoController.followed)
router.post('/action/unfollow/:id', VideoController.unfollow)
router.post('/action/unfollowed/:id', VideoController.unfollowed)


module.exports = router