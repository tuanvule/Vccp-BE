const { reset } = require('nodemon')
const Creator = require('../models/creator')

class LoginController {

    signup(req, res, next) {
        try {
            const img = req.body.name.charAt(0).toUpperCase()
            // addDocument('users', value)
            req.body.avata = img

            const creator = new Creator(req.body)
            creator.save()
                .then(data => res.json(data))
                .catch(err => res.json(err))

            // res.json(req.body)
        } catch (err) {
            console.log(err);
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