const { log } = require('console')
const fileSystem = require('fs') //Windows File System

function criarPasta(nomeDaPasta) {
    console.log(nomeDaPasta)
    // verifica se existe uma pasta com o nome recebido
    if(fileSystem.existsSync(nomeDaPasta)) {
        // se existe retorna true e ele não cria a pasta
        return true
    }
    fileSystem.mkdirSync(nomeDaPasta)
    return false
}

function criarArquivo(caminhoRelativo, nomeDoArquivo, dados) {
    
    fileSystem.writeFileSync(
        caminhoRelativo + nomeDoArquivo,
        JSON.stringify(dados)
    )
    return false
}

module.exports = {
    criarPasta,
    criarArquivo
}