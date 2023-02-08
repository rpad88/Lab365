const alunos = [
   {
      nome: 'Arthur',
      altura: 1.85,
      idade: 18,
      sexo: 'M',
      sala: 'dev_1',
      matematica: 10
   },
   {
      nome: 'Todd',
      altura: 1.65,
      idade: 34,
      sexo: 'M',
      sala: 'dev_1',
      matematica: 9 
   },
   {
      nome: 'Fred',
      altura: 1.67,
      idade: 32,
      sexo: 'M',
      sala: 'dev_1',
      matematica: 6 
   },
   {
      nome: 'Carol',
      altura: 1.67,
      idade: 34,
      sexo: 'M',
      sala: 'dev_1',
      matematica: 10  
   },
   {
      nome: 'Rodolfo',
      altura: 1.83,
      idade: 34,
      sexo: 'M',
      sala: 'dev_1',
      matematica: 8 
   }
]

// Imprime os alunos
console.table(alunos)

// Soma todas as notas
let total = 0
function somar(item) {
   total += item.matematica
}
alunos.forEach(somar)

// Calcula a média
function calculaMedia() {
   let media = total / alunos.length
   return console.log(`a Média é: ${media}`)
}
calculaMedia()

// Verifica se foi aprovado
function estaAprovado(aluno) {
   if(aluno.matematica < 7) return console.log(`${aluno.nome} está reprovado`) 
   return console.log(`${aluno.nome} está aprovado`)
}

// para cada aluno, executa a função estaAprovado()
alunos.forEach(estaAprovado)