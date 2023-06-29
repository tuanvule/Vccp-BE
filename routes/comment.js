const express = require('express');
const router = express.Router()
const CommentController = require('../app/controllers/comment')

router.get('/:postId', CommentController.get)
router.post('/create/:postId', CommentController.create)
router.post('/update/:id', CommentController.update)
router.get('/getReply/:commentId', CommentController.getReply)
router.post('/createReply/:commentId', CommentController.createReply)

module.exports = router