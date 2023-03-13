module.exports = {
    index: (req, res) => {
        res.send(`<h1>Bem vindo</h1>`)
    },
    devs: (req, res) => {
        const devs = [
            {name: "Fulano", email: "fulano@email.com"},
            {name: "Beltrano", email: "beltrano@gmail.com"}
        ]
        res.status(200).json(devs)
    },
    // [M1S06] Ex 4 - Rotas com express
    criaRota: (req, res) => {
        const {nome} = req.params
        if(!nome) {
            return res
                .status(400)
                .json({erro: "Campo nome é obrigatório"})
        }
        res
        .status(200)
        .send(`Rota de API criada pelo(a): ${nome}`)
    },
    // [M1S06] Ex 5 - Rotas com express
    enviaObj: (req, res) => {
        const obj = req.body
        res
        .status(200)
        .json({status:"Objeto enviado com sucesso", ...obj})
    },
    // [M1S06] Ex 6 - Criando uma API (parte 1)
    enviaUser: (req, res) => {
        const newUser = req.body
        res.status(200)
        .json({status:"Novo user enviado com sucesso", ...newUser})
    },
    deletaUser: (req, res) => {
        const listaDeUsers = [
            {id: 1, nome: "Arthur"},
            {id: 2, nome: "Breno"},
            {id: 3, nome: "Clovis"},
            {id: 4, nome: "Daniel"}
        ]
        const id = req.params.id
        console.log(req.params.id)
        if(id === undefined) return res.status(406).json({mensagem: 'Está faltando dados para concluir a operação'})

        if(isNaN(id)) return res.status(400).send('ID inválido')
        
        let novaLista = listaDeUsers.filter(user => user.id != id)
        res.status(200).send([{mensagem:`id ${id} deletado com sucesso.`}, novaLista])
        
    },
    // [M1S06] Ex 7 - Criando uma API (parte 2)
    verificaIdade: (req, res,) => {
        const {nome, idade, cargo, senha} = req.body
        
        if(Object.keys(req.body).length === 0 || isNaN(idade) 
            || !cargo || senha.length < 6) {
            return res.status(406).send({mensagem: "Está faltando dados para concluir a operação."})
        }
        
        if(idade < 21) return res.send({mensagem: 'Usuário não possui idade suficiente'})

        res.status(200).send({mensagem: `usuário ${nome} criado com sucesso`})
    }
}