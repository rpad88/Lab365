const carrinhoDeCompras = []
const ul = document.querySelector('[data-list]')
const vlrTotal = document.querySelector('[data-total-compra]')
const vlrRecebido = document.querySelector('[data-money]')
const vlrTroco = document.querySelector('[data-troco]')

var contador = 1

const App = {
    render(valor) {        
        let li = document.createElement('li')
        li.innerText = `item ${contador}: R$ ${valor}`
        ul.appendChild(li)
        contador++
    },
    totalCompra() {
        carrinhoDeCompras.reduce((acc, index) => {
            total = acc + index
        })
        vlrTotal.textContent = `Total da Compra: R$ ${total}`
        return total.toFixed(2)
    },
    troco(money) {
        console.log(money)
        let troco = money - this.totalCompra()
        console.log(troco)
        vlrTroco.textContent = `Valor do troco R$ ${troco.toFixed(2)} `
    }
}

var qtd = 1
var valor

do {
    valor = Number(prompt(`Informe o valor do produto ${qtd}`))
    carrinhoDeCompras.push(valor)
    App.render(valor)
    qtd++
} while (valor !== 0) {
    carrinhoDeCompras.pop()
    let money = Number(prompt('Informe o valor recebido'))
    App.troco(money)
}