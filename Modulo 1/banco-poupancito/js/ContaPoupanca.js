import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    
    atualizaJuros(index = 0.007) {
       let remuneracao =  this.getSaldo * index
        this.deposita(remuneracao)
    }

    deposita(remuneracao) {
        console.log(`Atualização monetária no valor de R$ ${remuneracao}`);
        super.deposita(remuneracao)
    }
}