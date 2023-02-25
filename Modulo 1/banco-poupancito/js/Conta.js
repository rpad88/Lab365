export class Conta {
    #id = 0
    #saldo = 0
    #senha

    constructor(senha, saldo) {
        this.#senha = Number(senha) ||  this.obrigatorio('senha')
        this.#saldo = saldo
        this.#id += 1
    }

    obrigatorio(campo) {
        throw new Error(`${campo} é obrigatório`)
    }

    set setSaldo(vlr) {
        this.#saldo = vlr
    }

    get getSaldo() {
        return this.#saldo
    }

    mostraSaldo() {
        return `Saldo: R$ ${this.getSaldo.toFixed(2)}`
    }

    atualizaJuros(index) {
        this.setSaldo = this.#saldo * index
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
        return console.log(`Deposito realizado com sucesso.`)
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