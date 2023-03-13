const express = require('express')
const app = express()
app.use(express.json())

const rotas = require('./routes/rotas')

// ROTAS
const listaDeRotas = ['/', '/devs', '/criaRota/:nome', '/enviaObj', '/envia-user', '/deleta-user/:id', '/verifica-idade']

// MIDDLEWARES
// [M1S06] Ex 8 - Criando uma API (parte 3)
app.use('/verifica-idade', (req, res, next) => {
    const {cargo} = req.body
    if (cargo !== 'lider') {
        res.status(406).send("funcionário não é líder")
    }
    next()   
})

app.use(listaDeRotas, rotas)

// app.use('/', rotas)
// app.use('/devs', rotas)
// app.use('/criaRota/:nome', rotas)


// [M1S06] Ex 3 - Iniciando um servidor node
app.listen(3333, () => {
    console.log('servidor online na porta 3333')
})