// const { google } = require('googleapis')
const fs = require('fs')
// const path = require('path')
// const { uploadFile } = require('../models/file')
const { Readable } = require('stream');
const got = require('got');


const { uploadFile } = require("../../utils/file")
const Video = require("../models/video")
const Comment = require("../models/comment")
const Creator = require("../models/creator");

class VideoController {

    get(req, res, next) {

      if(req.query.isGetHotVD) {
        Video.find().sort({like: 1})
          .then(data => {
            const start = Math.round(data.length * 0.75)
            const newData = data.slice(start, data.length)
            res.json(newData)
          })
          .catch(err => console.log(err))
      } else {
        Video.find()
          .then(data => res.json(data))
          .catch(err => console.log(err))
      }

      // const video = new Video(req.body)
      // video.save()
      //   .then(data => res.json(data))
      //   .catch(err => console.log(err))
    }

    getVDByCreator(req, res, next) {
      Video.find({Cid: req.params.id})
        .then(data => res.json(data))
        .catch(err => console.log(data))
    }

    create(req, res, next) {
      
      // const data = {...JSON.parse(req.query.data), videoUrl: req.query.videoUrl}
      // console.log(req.body)
      const video = new Video(req.body)
      video.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }

    delete(req, res, next) {

    }

    like(req, res, next) {
      Video.updateOne({_id: req.params.id}, { $push: { like: req.body.Uid }})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }

    disLike(req, res, next) {
      Video.updateOne({_id: req.params.id}, { $pull: { like: req.body.Uid }})
        .then(data => res.json({ id: req.params, Uid: req.body.Uid}))
        .catch(err => console.log(err))
    }

    follow(req, res, next) {
      Creator.updateOne({_id: req.params.id}, { $push: { follower: req.body.Uid }})
        .then(data => res.json(data))
        // .catch(err = console.log(err))
    }

    followed(req, res, next) {
      
      Creator.updateOne({ _id: req.body.Uid }, { $push: { followed: req.params.id }})
        .then(data => res.json(data))
        // .catch(err = console.log(err))
    }


    unfollow(req, res, next) {
      Creator.updateOne({_id: req.params.id}, { $pull: { follower: req.body.Uid }})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }

    unfollowed(req, res, next) {
      
      Creator.updateOne({_id: req.body.Uid}, { $pull: { followed: req.params.id }})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }

}

module.exports = new VideoController()