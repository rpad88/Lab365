
const lista = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria']

function troca(index1, index2) {
    if(index1 >= lista.length || index2 >= lista.length) {
        throw new Error('indice maior que o tamanho do array.')
    }

    if(index1 !== Number || index2 !== Number) {
        throw new Error('favor enviar apenas números')
    }

    let nome1 = lista[index1]
    let nome2 = lista[index2]

    lista[index1] = nome2
    lista[index2] = nome1

    return lista
}

console.log(troca('2', 0))