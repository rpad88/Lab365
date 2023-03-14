const express = require('express')
const app = express()
app.use(express.json())

const rotas = require('./routes/rotas')

// ROTAS
const listaDeRotas = [
    '/', //index
    '/devs', //retorna um array
    '/rota/:nome', //retorna a string "Rota de API criada pelo ${nome}"
    '/enviaObj', //recebe um objeto no body da requisição
    '/envia-user', //recebe um user no body da requisição
    '/deleta-user/:id', //deleta um usuário pelo id
    '/verifica-idade' //verifica se o usuário tem idade < 21
]

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
// app.use('/rota/:nome', rotas)


// [M1S06] Ex 3 - Iniciando um servidor node
app.listen(3333, () => {
    console.log('servidor online na porta 3333')
})