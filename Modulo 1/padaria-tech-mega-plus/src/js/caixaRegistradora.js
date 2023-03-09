import { Cliente } from "./Cliente.js"
import { Produto } from "./Produto.js"
export class CaixaRegistradora {    
    #cliente
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
            console.log(produto);
            if(qtd > produto.getQtdEstoque) {
                throw new Error('Produto sem estoque suficiente')
            }
            Produto.prototype.retira(produto,qtd)
            const subTotal = {produto, qtd}
            this.#carrinho.push(subTotal)
        }        
    }
    
    fechaConta(dinheiro) {
        if(isNaN(dinheiro)) return console.warn('Favor informar o valor recebido.')
        return console.log(`valor do troco: ${(dinheiro - this.total).toFixed(2)}`)
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
        console.log("Cliente: " +this.#cliente.nome)
        var total = 0
        this.#carrinho.forEach(item => {
        console.log(`
        Produto: ${item.produto.nome} | Preço: ${item.produto.preço} | Qtd: ${item.qtd}
        total do item: R$ ${(item.produto.preço * item.qtd).toFixed(2)}
        `)
        let subTotal = item.qtd * item.produto.preço
        total += subTotal
       })
        console.log('total R$ '+total.toFixed(2))
        return total.toFixed(2)
    }
}

