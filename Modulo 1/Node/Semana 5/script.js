const list = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria','Luis','Danilo','José']

// [M1S05] Ex 1 - Função deletar dados duplicados
let listaUnica = [...new Set(list)]
console.log(listaUnica)

let apagados = list.filter((item, i) => {
    return list.indexOf(item) !== i
})
console.log(apagados.join(','), listaUnica);

// [M1S05] Ex 2 - Função de exibir dados dos usuários
function concatenar() {
    const usuarios = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria']
    const frutas = ['Banana','Morango','Maçã','Uva','Pêra','Laranja']
    frutas.reverse()

    const novoArray = []
    for(i = 0; i< usuarios.length; i++) {
        novoArray.push(usuarios[i] + ' - ' + frutas[i])
    }
    console.log(novoArray);
}