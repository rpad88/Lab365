const number = document.querySelector('[data-input]')
const ul = document.querySelector('[data-ul]')

function multiplica(multiplicador) {
    let i = 1
    while(i <= 10) {
        let li = document.createElement('li') //cria o elemento <li>
        li.innerText = `${multiplicador} * ${i} = ${multiplicador * i}` //insere o texto: <li> conteúdo </li>
        ul.appendChild(li) // insere o <li> criado como filho da <ul>
        i++
    }
}

document.forms.form.addEventListener('submit', (e, multiplicador = number.value) => {
    e.preventDefault()
    // remove todos os <li> dentro do <ul>, caso tenha.
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstElementChild)
    }
    // chama a função multiplica passando como parâmetro o number.value (informado no input)
    multiplica(multiplicador)
})