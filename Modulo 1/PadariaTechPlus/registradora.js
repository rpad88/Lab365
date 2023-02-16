const carrinhoDeCompras = []
const ul = document.querySelector('[data-list]')
const vlrTotal = document.querySelector('[data-total-compra]')
const vlrRecebido = document.querySelector('[data-money]')
const vlrTroco = document.querySelector('[data-troco]')

// contador de itens
var contador = 1

const App = {
    // insere os <li> na tela.
    render(valor) {        
        let li = document.createElement('li')
        li.innerText = `item ${contador}: R$ ${valor}`
        ul.appendChild(li)
        contador++
    },
    totalCompra() {
        console.log('totalCompra chamado');
        let total = carrinhoDeCompras.reduce((acc, index) => {
           return acc + index
        })
        vlrTotal.textContent = `Total da Compra: R$ ${total}`
        return total.toFixed(2)
    },
    troco(money) {
        console.log(money)
        let troco = money - this.totalCompra()
        console.log(troco)
        vlrTroco.textContent = `Valor do troco: R$ ${troco.toFixed(2)} `
    }
}

var qtd = 1
var valor

do {
    valor = Number(prompt(`Informe o valor do produto ${qtd}`).replace(',','.'))
    carrinhoDeCompras.push(valor)
    App.render(valor)
    qtd++
} while (valor !== 0) {
    carrinhoDeCompras.pop() //remove o último item do array que no caso seria 0, influenciando na quantidade de itens
    App.totalCompra() //chama o cálculo da compra

    // Informa o valor recebido
    let money = Number(prompt('Informe o valor recebido').replace(',','.'))
    vlrRecebido.textContent = `Valor recebido: R$ ${money}`
    // passa para a função troco o valor recebido para o cálculo do troco.
    App.troco(money)
}