import { Conta } from "./Conta.js";

let contaCorrente = new Conta(12345)
console.log(contaCorrente);

contaCorrente.deposita(150)
contaCorrente.saca(30)
// console.log(contaCorrente.getSaldo)

let cc2 = new Conta()