const express = require('express');
const router = express.Router()
const MeController = require('../app/controllers/me')

router.get('/:id', MeController.get)
router.get('/followed', MeController.flowing)
router.post('/create', MeController.create)
router.delete('/delete/:id', MeController.delete)

module.exports = router