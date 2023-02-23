import './style.css'
import { CaixaRegistradora } from './js/CaixaRegistradora'
import { Cliente } from './js/Cliente'
import { Produto } from './js/Produto'

const estoque = []
// const compras = []

function addNovoProduto(produto) {
  estoque.push(produto)
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello</h1>
  </div>
`
let p1 = new Produto("Carvão", 111122, 15)
let p2 = new Produto('Gelo Cubo',112233, 10.90)
// console.log(p2)
addNovoProduto(p1)
addNovoProduto(p2)

// imprime a lista de produtos
console.log(estoque)
// crio 1 cliente
let cli = new Cliente("João")
// abro a Caixa Registradora com o cliente como parâmetro
let cr = new CaixaRegistradora(cli)
console.log(cr)
cr.registraCompra(p1, 3)
cr.registraCompra(p2, 2)

console.log(cr.total)


