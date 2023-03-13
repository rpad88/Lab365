const express = require('express')
const app = express()
app.use(express.json())

const rotas = require('./routes/rotas')

// app = {
//     use('/', função),
//     listen: recebe(porta, função callback),
// }

// ROTAS
const listaDeRotas = ['/', '/devs', '/criaRota/:nome', '/enviaObj', '/envia-user', '/deleta-user/:id', '/verifica-idade']
app.use(listaDeRotas, rotas)

// app.use('/', rotas)
// app.use('/devs', rotas)
// app.use('/criaRota/:nome', rotas)
// app.use('/enviaObj', rotas)
// app.use('/envia-user', rotas)
// app.use('/deleta-user', rotas)


// [M1S06] Ex 3
app.listen(3333, () => {
    console.log('servidor online na porta 3333')
})