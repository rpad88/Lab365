export class Conta {
    #saldo
    #senha

    constructor(senha, saldo = 0) {
        this.#senha = senha || new Error("É obrigatório informar uma senha")
    }

    get getSaldo() {
        return this.#saldo
    }
    
    checkPass() {
       let password = prompt("digite a senha:")
       if(password !== this.#senha) {
        throw new Error("Senha inválida")
       }
    }

    deposita(valor){
        if(valor <= 0) throw new Error("valor deve ser maior que 0")
        this.#saldo += valor
    }

    saca(valor) {
        if(valor <= 0) throw new Error("valor deve ser maior que 0")
        
        if(valor > this.#saldo) throw new Error("Saldo insuficiente.")
        
        this.#saldo -= valor
    }

}