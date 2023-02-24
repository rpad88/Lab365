export class Conta {
    #id = 0
    #saldo = 0
    #senha

    constructor(senha, saldo) {
        this.#senha = Number(senha) ||  this.obrigatorio('senha')
        this.#id += 1
    }

    obrigatorio(campo) {
        throw new Error(`${campo} é obrigatório`)
    }

    get getSaldo() {
        return this.#saldo
    }
    
    checkPass() {
       let password = Number(prompt("digite a senha:"))
       if(password !== this.#senha) {
        throw new Error("Senha inválida")
       }
    }

    deposita(valor){
        if(valor <= 0) throw new Error("valor deve ser maior que 0")
        this.checkPass()
        this.#saldo += valor
        return console.log(`Deposito realizado com sucesso.
        Saldo atual: R$ ${this.getSaldo}`)
    }

    saca(valor) {
        if(valor <= 0) throw new Error("valor deve ser maior que 0")
        
        if(valor > this.#saldo) throw new Error("Saldo insuficiente.")
        
        this.checkPass()
        this.#saldo -= valor
        return console.log(`valor sacado: R$ ${valor}
        Saldo atual: R$ ${this.getSaldo}`)
    }

}