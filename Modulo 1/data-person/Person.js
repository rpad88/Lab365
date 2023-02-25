export class Person {
    nome
    idade
    altura
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    apresentar() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura.`)
    }
}