import { Conta } from "./Conta.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import { PoupancaPremium } from "./PoupancaPremium.js";

// import { ContaPoupanca } from "./ContaPoupanca.js"

let contaCorrente = new Conta(12345, 100)
// console.log(contaCorrente);

// contaCorrente.deposita(150)
// contaCorrente.saca(30)
// console.log(contaCorrente.getSaldo)

let cp = new ContaPoupanca(123, 100)
console.log(cp)
cp.deposita(150)
cp.atualizaJuros()
console.log(cp.mostraSaldo())

let pp = new PoupancaPremium(123, 100)
console.log(pp)
pp.atualizaJuros()
console.log(pp.mostraSaldo())