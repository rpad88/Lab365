import { Cliente } from "./Cliente"
import { Produto } from "./Produto"
export class CaixaRegistradora {    
    #id = 0
    #cliente
    // #preço
    #carrinho = []
    
    obrigatorio(campo) {
        throw new Error(`${campo} obrigatório`)
    }
    
    constructor(cliente) {
        this.#cliente = cliente || this.obrigatorio("Nome do Cliente")
    }
    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente) {
            this.#cliente = novoCliente
        }
    }
    get cliente() {
        return this.#cliente
    }
    registraCompra(produto, qtd) {
        if(produto instanceof Produto) {
            let subTotal = {produto, qtd}
            this.#carrinho.push(subTotal)
        }        
    }
    
    fecharConta(dinheiro) {
        return `valor do troco: ${dinheiro - this.total}`
    }
    get id() {
        return this.#id
    }
    get dados() {
        return this
    }
    set carrinho(produto) {
        if(produto instanceof Produto) {
            this.#carrinho.push(produto)
        }
    }
    get total() {
        console.log(this.#cliente.nome)
        var total = 0
        this.#carrinho.forEach(item => {
        console.log(`
        Produto: ${item.produto.nome}
        Preço: ${item.produto.preço}
        qtd: ${item.qtd}
        Total: R$ ${(item.produto.preço * item.qtd).toFixed(2)}
        `)
        let subTotal = item.qtd * item.produto.preço
        total += subTotal
       })
        
       return total
    }
}

