const list = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria','Luis','Danilo','José']

// [M1S05] Ex 1 - Função deletar dados duplicados
let listaUnica = [...new Set(list)]
console.log(listaUnica)

let apagados = list.filter((item, i) => {
    return list.indexOf(item) !== i
})
console.log(apagados.join(','), listaUnica);