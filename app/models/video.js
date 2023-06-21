const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Video = new Schema({
    follower: {type: Array, default: []},
    like: {type: Array, default: []},
    caption: {type: String, default: ''},
    videoUrl: {type: String, require: true},
    avata: {type: String, require: true},
    Cid: { type: String, require: true },
    creatorName: { type: String, require: true},
})

module.exports = mongoose.model('Video', Video)