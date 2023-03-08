const lista = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria']

function busca(nome) {
    if(typeof nome !== 'string') throw new Error('Nome inválido')
    let index = lista.findIndex(el => el.toLowerCase() == nome.toLowerCase())
    if(index < 0) return console.warn('nome na lista não encontrado')
    console.log(lista[index], 'posição: '+index);
}

busca('Danilo')