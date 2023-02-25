import { Person } from "./Person.js";

export class Empregado extends Person {
    profissao

    constructor(nome, idade, altura, profissao){
        super(nome, idade, altura)
        this.profissao = profissao
    }

    apresentar() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}.`)
    }
}