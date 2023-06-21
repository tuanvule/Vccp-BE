const Creator = require("../models/creator")

// Creator.updateMany({like: 0}, {followed: []})
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

class CreatorController {

    get(req, res, next) {
        if(req.params.id) {
            const newParams = req.params.id.split(',')
            if(typeof newParams !== 'object') {
                Creator.findById(req.body._id || req.params.id)
                    .then(data => {
                        const newdata = data.toObject()
                        console.log(newdata)
                        delete newdata.password
                        res.json(newdata)
                    })
                    .catch(err => res.json({
                        messages: err
                    }))
            } else if(typeof newParams === 'object') {
                // console.log(newParams)
                Creator.find({
                    _id: { $in: newParams}
                })
                    .then(data => {
                        const a = []
                        data.forEach((b, i) => {
                            const newb = b.toObject()
                            a.push({...newb, password: ''})
                        })
                        console.log(a)
                        res.json(a)
                    })
                    .catch(err => res.json({
                        messages: err
                    }))
            }
        }

        // http://localhost:4000/creator/getCreator?type=SC
        if(req.query.type === 'SC') {
            Creator.find({ follower: { $size: 1 } })
                .then(data => {
                    const a = []
                    data.forEach(b => {
                        const newb = b.toObject()
                        a.push({...newb, password: ''})
                    })
                    res.json(a)
                })
                .catch(err => res.json({
                    messages: err
                }))
        }

        if(req.query.name) {
            Creator.find({ name: { $regex: req.query.name} })
                .then(data => {
                    const a = []
                    data.forEach(b => {
                        const newb = b.toObject()
                        a.push({...newb, password: ''})
                    })
                    res.json(a)
                })
                .catch(err => res.json({
                    messages: err
                }))
        }
    }

    follow(req, res, next) {
        Creator.updateOne({_id: req.params.id}, { $push: { follower: req.body.Uid }})
          .then(data => res.json(data))
          // .catch(err = console.log(err))
    }

    unfollow(req, res, next) {
        Creator.updateOne({_id: req.params.id}, { $pull: { follower: req.body.Uid }})
            .then(data => res.json(data))
            .catch(err => console.log(err))
    }

    isFollow(req, res, next) {
        Creator.findOne({_id: req.params.id})
            .then(datas => datas.follower.some(data => data === req.body.Uid))
            .then(isFollow => res.json(isFollow))
            .catch(err => console.log(err))
    }

    create(req, res, next) {

    }

    async updateProfile(req, res, next) {
        try {
            const { story } = req.body

            const profile = { 
                story,
            }
    
            await Creator.updateOne({_id: req.params.id}, profile)
    
            const data = await Creator.findOne({_id: req.params.id})
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }

    delete(req, res, next) {

    }

}

module.exports = new CreatorController()