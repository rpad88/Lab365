import { ContaPoupanca } from "./ContaPoupanca.js";

export class PoupancaPremium extends ContaPoupanca {
    atualizaJuros(index = 0.012) {
        let remuneracao =  this.getSaldo * index
        this.deposita(remuneracao)
    }
}