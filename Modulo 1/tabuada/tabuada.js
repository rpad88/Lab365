const number = document.querySelector('[data-input]')
const ul = document.querySelector('[data-ul]')

function multiplica(multiplicador) {
    let i = 1
    while(i <= 10) {
        let li = document.createElement('li')
        li.innerText = `${multiplicador} * ${i} = ${multiplicador * i}`
        console.log(`${multiplicador} * ${i} = ${multiplicador * i}`)
        ul.appendChild(li)
        i++
    }
}

document.forms.form.addEventListener('submit', (e, multiplicador = number.value) => {
    e.preventDefault()
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstElementChild)
    }
    multiplica(multiplicador)
})