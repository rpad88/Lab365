export class Produto {
    #nome
    #preço
    #codigoBarra
    #qtdEstoque

    obrigatorio(campo) {
        throw new Error(`${campo} do produto é obrigatório`)
    }
    
    constructor(nome, codigoBarra, preco, qtdEstoque) {
        this.#nome = nome || this.obrigatorio("Nome")
        this.#codigoBarra = codigoBarra || this.obrigatorio("Código de Barras")
        this.#preço = parseFloat(preco) || this.obrigatorio("Preço")
        this.#qtdEstoque = qtdEstoque || this.obrigatorio("Quantidade no estoque")
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
    get getQtdEstoque(){
        return this.#qtdEstoque
    }

    set setQtdEstoque(qtd) {
        this.#qtdEstoque = qtd
    }

    retira(produto, qtd) {
        // if(#qtdEstoque in produto) {
        //     let total = produto.getQtdEstoque - qtd
        //     produto.setQtdEstoque = total
        // }
        produto.#qtdEstoque -= qtd
    }
}