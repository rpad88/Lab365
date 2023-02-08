const credentials = {
    name: 'estudante',
    password: '2023'
}

const user = {
    name: '',
    password: ''
}

// Selectors
const userName = document.querySelector('[data-name]')
const pwd = document.querySelector('[data-password]')
const form = document.querySelector('#form')

// listeners
userName.addEventListener('change', (e) => {
    e.preventDefault()
    user.name = e.target.value
})
pwd.addEventListener('change', (e) => {
    e.preventDefault()
    user.password = e.target.value
})

// formValidation recebe de parâmetros login e password
function formValidation(login, password) {
    if (login == credentials.name && password == credentials.password) return console.info('logado')

    return console.warn('credenciais incorretas')
}

// limpa os inputs
function clear() {
    userName.value = ''
    pwd.value = ''
    console.log('* inputs limpos');
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(`
    dados informados
    Username: ${user.name} 
    Password: ${user.password}`)

    // chama a função passando como parâmetro o name e password recebidos
    formValidation(user.name, user.password)
    clear()
})
