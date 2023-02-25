import { Empregado } from "./Empregado.js";
import { Person } from "./Person.js";

let p1 = new Person("Adilson", 57, 1.78)
p1.apresentar()

let p2 = new Empregado('Fulano', 35, 1.80, 'Servidor')
p2.apresentar()