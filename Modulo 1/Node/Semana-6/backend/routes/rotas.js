const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.index)
router.get('/devs', controller.devs)

// [M1S06] Ex 4
router.post('/criaRota/:nome', controller.criaRota)

// [M1S06] Ex 5
router.post('/enviaObj', controller.enviaObj)

// [M1S06] Ex 6
router.post('/envia-user', controller.enviaUser)

router.delete('/deleta-user/:id', controller.deletaUser)

router.post('/verifica-idade', controller.verificaIdade)

module.exports = router