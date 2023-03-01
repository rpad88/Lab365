// [M1S05] Ex 1 - Função deletar dados duplicados
function deletarDuplicados() {
    const list = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria','Luis','Danilo','José']

    console.log('lista original ', list);

    let listaUnica = [...new Set(list)]
    console.log('lista unica: ', listaUnica)

    let apagados = list.filter((item, i) => {
        return list.indexOf(item) !== i
    })
    console.log('final: ',apagados.join(','), listaUnica);
}

// [M1S05] Ex 2 - Função de exibir dados dos usuários
function concatenar() {
    const usuarios = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria']
    const frutas = ['Banana','Morango','Maçã','Uva','Pêra','Laranja']
    frutas.reverse()

    const novoArray = []
    for(i = 0; i< usuarios.length; i++) {
        novoArray.push(usuarios[i] + ' - ' + frutas[i])
    }
    console.log('resultado final: ',novoArray);
}

// [M1S05] Ex 3 - Função para adicionar novos usuários na lista