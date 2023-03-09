import './style.css'
import { CaixaRegistradora } from './js/CaixaRegistradora.js'
import { Cliente } from './js/Cliente.js'
import { Produto } from './js/Produto.js'

const estoque = []

function addNovoProduto(produto) {
  estoque.push(produto)
}

document.querySelector('#app').innerHTML = `
  <div>
    <h3>Padaria Tech Mega Plus</h3>
    <form id="form">
      <div>
        <input type='text'
        placeholder="Informe o nome do cliente"
        id='cliente' />
        <button type='submit'>Atender</button>
      </div>
    </form>
  </div>
`
const clienteInput = document.querySelector('#cliente') 
const form = document.querySelector('#form')

form.addEventListener('submit', e => {
  e.preventDefault()
  if(clienteInput.value == '' || clienteInput.value == null) {
    throw new Error('Favor informar o nome do cliente')
  }
  let cliente = new Cliente(clienteInput.value)
  console.log(cliente)
})
/* *Class Produto
*   @param (Nome do produto, Código de barra, Preço, Quantidade Estoque)
*/
let p1 = new Produto("Carvão", 111122, 15, 10)
let p2 = new Produto('Gelo Cubo',112233, 10.90, 15)
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
cr.registraCompra(p1, 10)
cr.registraCompra(p2, 2)

cr.fechaConta(180.5)