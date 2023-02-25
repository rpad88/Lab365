import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    
    atualizaJuros(index = 1.07) {
       let vlrAtualizado =  this.getSaldo * index
       let remuneracao = vlrAtualizado - this.getSaldo
        this.deposita(remuneracao)
    }

    deposita(remuneracao) {
        console.log(`Atualização monetária no valor de R$ ${remuneracao}`);
        super.deposita(remuneracao)
    }
}