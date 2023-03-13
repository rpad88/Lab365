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
    enviaObj: (req, res) => {
        const obj = req.body
        res
        .status(200)
        .json({status:"Objeto enviado com sucesso", ...obj})
    },
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
        res.status(200).json(novaLista).send({mensagem:"deletado com sucesso."})
    },
    verificaIdade: (req, res) => {
        const {nome, idade, cargo, senha} = req.body
        
        if(Object.keys(req.body).length === 0 || isNaN(idade) 
            || !cargo || !senha) {
            return res.status(406).send({mensagem: "Está faltando dados para concluir a operação."})
        }
        
        if(idade < 21) {
            return res.send({mensagem: 'Usuário não possui idade suficiente'})
        }

        res.status(200).send({mensagem: `usuário ${nome} criado com sucesso`})
    }
}