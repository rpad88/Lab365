export class CaixaRegistradora {
    #id = 0
    #cliente
    #codigoBarra
    #preco
    #nome
    
    constructor(nome, codigoBarra, preco) {
        this.#codigoBarra = codigoBarra
        this.#preco = preco
        this.#nome = nome
        CaixaRegistradora.id += 1
    }
    novoProduto(produto) {
        this.estoque.push(produto)
    }
    set cliente(nome) {
        this.#cliente = nome
    }
    registraProduto(codigoBarra, qtd) {
        this.qtd = qtd        
    }
    get total() {
        return `total: ${this.qtd * this.#preco}`
    }
    fecharConta(dinheiro) {
        return `valor do troco: ${dinheiro - this.total}`
    }
    get id() {
        return CaixaRegistradora.id
    }
    get dados() {
        return this
    }
}

