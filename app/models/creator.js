const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, maxLength: 255, required: true},
    password: {type: String, maxLength: 255, required: true},
    follower: {type: Array, default: []},
    followed: {type: Array, default: []},
    like: {type: Number, default: 0},
    content: {type: Array, default: []},
    avata: {type: String},
    story: {type: String, default: ''},
    introduce: {type: Object, default: {}}
    // id: { type: String }
})

module.exports = mongoose.model('User', User)