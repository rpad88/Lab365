export class Produto {
    #nome
    #preço
    #codigoBarra

    obrigatorio(campo) {
        throw new Error(`${campo} do produto é obrigatório`)
    }
    
    constructor(nome, codigoBarra, preco) {
        // if(!nome) this.obrigatorio("Nome")
        // if(!codigoBarra) this.obrigatorio("Código de Barras")
        // if(!preco) this.obrigatorio("Preço")
        this.#nome = nome || this.obrigatorio("Nome")
        this.#codigoBarra = codigoBarra || this.obrigatorio("Código de Barras")
        this.#preço = preco || this.obrigatorio("Preço")
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