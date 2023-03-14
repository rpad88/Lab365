const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.index)
router.get('/devs', controller.devs)

// [M1S06] Ex 4 - Rotas com express
router.post('/rota/:nome', controller.rota)

// [M1S06] Ex 5 - Rotas com express
router.post('/enviaObj', controller.enviaObj)

// [M1S06] Ex 6 - Criando uma API (parte 1)
router.post('/envia-user', controller.enviaUser)

router.delete('/deleta-user/:id', controller.deletaUser)

// [M1S06] Ex 7 - Criando uma API (parte 2)
router.post('/verifica-idade', controller.verificaIdade)

module.exports = router