const { reset } = require('nodemon')
const Creator = require('../models/creator')

class LoginController {

    signup(req, res, next) {
        try {
            const userData = JSON.parse(req.query.data)
            const img = userData.name.charAt(0).toUpperCase()
            userData.avata = img

            const creator = new Creator(userData)
            creator.save()
                .then(data => res.json(data))
                .catch(err => res.json(err))

            // res.json(userData)
        } catch (err) {
            res.json(err)
        }
    }

    signin(req, res, next) {
        const { name, password } = req.query

        Creator.findOne({name: name, password: password})
            .then(data => res.json(data))
    }

}

module.exports = new LoginController()