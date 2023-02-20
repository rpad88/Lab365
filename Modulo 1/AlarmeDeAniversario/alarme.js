
const today = new Date() //.toLocaleString('pt-br') // dd/MM/dddd
const specialDay = new Date('2023 10 15') //default == yyyy MM dd
    //.toLocaleString('pt-br') // dd/MM/dddd

let totalSeconds = (specialDay - today) / 1000 

const diffInMs = (specialDay - today)

// 1000 = Milisegundos
// 60 = segundos
// 60 = minutos
// 24 = horas
const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

function countDown() {
    if(Math.floor(diffInDays) == -1) {
        console.log("Parabéns 🎉")
        clearInterval(interval)
    } else {
        console.log(`faltam ${Math.floor(diffInDays + 1)} dias para o aniversário.`)
    }
}

const interval = setInterval(countDown, 5000)