const express = require('express');
const router = express.Router()
const LoginController = require('../app/controllers/login')

router.post('/signup', LoginController.signup)
router.get('/signin', LoginController.signin)

module.exports = router