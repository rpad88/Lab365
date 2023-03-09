const { json } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

// app = {
//     use,
//     listen: recebe(porta, função callback),
//     route
// }

const devs = [
    {name: "Fulano", email: "fulano@email.com"},
    {name: "Beltrano", email: "beltrano@gmail.com"}
]

app.get('/', (req, res) => {
    res.send('Bem vindo')
})
app.get('/devs', (req, res) => {
   return res.json(devs)
})
app.post('/rota/:nome', (req, res) => {
    const {nome} = req.params
    if(!nome) {
        return res
            .status(400)
            .json({"erro": "Campo nome é obrigatório"})
    }
    res.send(`Rota de API criada pelo(a): ${nome}`)
})

app.listen(3333, () => {
    console.log('servidor online na porta 3333')
})