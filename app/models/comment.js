const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// console.log(Date.now())

const Comment = new Schema({
    time: {type: Number, default: Date.now()},
    timeAgo: {type: String, default: 'now'},
    like: {type: Array, default: []},
    avata: {type: String, require: true},
    Cid: { type: String, require: true },
    name: { type: String, require: true},
    comment: { type: String, require: true},
    postId: { type: String, require: true},
})

module.exports = mongoose.model('Comment', Comment)