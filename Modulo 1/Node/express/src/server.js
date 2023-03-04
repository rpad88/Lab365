const express = require('express')
const { criarPasta, criarArquivo } = require('./utils')

const application = express()
application.use(express.json())

application.get('/listagem/:nome/:idade', (requisicao, resposta) => {
  //path, query
  const { nome, idade } = requisicao.params 
  const { telefone } = requisicao.query //opcional
  console.log(nome, idade, telefone)
  resposta.status(400).json({"nome": nome})
})

application.get('/rotadopedro', (requisicao, resposta) => {
  resposta.send("Hello World")
})

application.get('/', (requisicao, resposta) => {
  resposta.send("Hello Pedro")
})

application.post('/', (requisicao, resposta) => {
    const { nome } = requisicao.body
    if(!nome) return resposta
    .status(400)
    .json({"erro": "Campo nome é obrigatório"})

    const existePasta = criarPasta(nome)

    if(existePasta) {
        return resposta
        .status(400)
        .json({"erro": "Já existe uma pasta com esse nome"})
    }

    resposta.send('Criei a pasta')
})

application.post('/criarArquivo', (req, res) => {
    const {caminhoRelativo, nomeDoArquivo, dados} = req.body

    const existeArquivo = criarArquivo(caminhoRelativo, nomeDoArquivo, dados)
    
    res.send('Criou o arquivo')
})

application.listen(3333)