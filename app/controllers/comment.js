const Comment = require("../models/comment")
const ReplyComment = require("../models/replyComment")
var moment = require('moment')

setInterval(() => {
    Comment.find()
        .then(datas => 
            datas.forEach(data => 
                Comment.updateOne({ _id: data._id}, {timeAgo: moment(data.time).fromNow()})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            )
        )
}, 900000)

setInterval(() => {
    ReplyComment.find()
        .then(datas => 
            datas.forEach(data => 
                ReplyComment.updateOne({ _id: data._id}, {timeAgo: moment(data.time).fromNow()})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            )
        )
}, 900000)



class CommentController {

    get(req, res, next) {
        Comment.find({postId: req.params.postId})
            .then(data => res.json(data))
    }

    flowing(req, res, next) {
        
    }

    create(req, res, next) {
        const data = {
            postId: req.params.postId,
            ...req.body
        }
        // console.log(data)
        const comment = new Comment(data)
        comment.save()
            .then(data => res.json(data))
    }

    createReply(req, res, next) {
        const data = {
            commentId: req.params.commentId,
            ...req.body
        }
        // console.log(data)
        const replyComment = new ReplyComment(data)
        replyComment.save()
            .then(data => res.json(data))
    }

    getReply(req, res, next) {
        console.log(req.params)

        ReplyComment.find({commentId: req.params.commentId})
            .then(data => res.json(data))
            .catch(err => console.log(err))
    }

    delete(req, res, next) {

    }

}

module.exports = new CommentController()