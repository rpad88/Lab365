import './style.css'
import { CaixaRegistradora } from './js/caixaRegistradora'

const estoque = []

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello</h1>
  </div>
`
let c = new CaixaRegistradora("Carvão",123,15)
c.cliente = 'joão'
console.log(c.dados);
console.log(c.id);
