
class MeController {

    get(req, res, next) {
        res.json({message: 'hello world'})
    }

    flowing(req, res, next) {
        
    }

    create(req, res, next) {

    }

    delete(req, res, next) {

    }

}

module.exports = new MeController()