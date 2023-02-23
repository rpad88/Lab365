export class Produto {
    #nome
    #preço
    #codigoBarra

    obrigatorio(campo) {
        throw new Error(`${campo} do produto é obrigatório`)
    }
    
    constructor(nome, codigoBarra, preco) {
        this.#nome = nome || this.obrigatorio("Nome")
        this.#codigoBarra = codigoBarra || this.obrigatorio("Código de Barras")
        this.#preço = parseFloat(preco) || this.obrigatorio("Preço")
    }

    get nome() {
        return this.#nome
    }

    get preço() {
        return this.#preço
    }

    get codigoBarra() {
        return this.#codigoBarra
    }
}