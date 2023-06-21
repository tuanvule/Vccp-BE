const CreatorRouter = require('./creator')
const VideoRouter = require('./video')
const LoginRouter = require('./login')
const CommentRouter = require('./comment')

function route(app) {
    app.use('/', VideoRouter)
    app.use('/creator', CreatorRouter)
    app.use('/login', LoginRouter)
    app.use('/comment', CommentRouter)
}

module.exports = route