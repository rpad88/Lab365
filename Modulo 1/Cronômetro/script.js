const counter = document.querySelector('[data-counter]')
const restartBtn = document.querySelector('[data-restart]')
var initialTime = 10

function timer() {
    if(initialTime > 0) {
        counter.textContent = initialTime
        initialTime--
    }
    if(initialTime == 0) return counter.textContent = 'Seu tempo acabou!! Tente novamente!!'
}

restartBtn.addEventListener('click', () => initialTime = 10)

setInterval(timer, 1000)