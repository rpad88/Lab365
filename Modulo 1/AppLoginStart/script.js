// pega o Array "loginData" no localStorage ou cria um array vazio
let itemForStorage = JSON.parse(localStorage.getItem('loginData')) || []

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

// @param user
function formValidation(login) {
    if(login.name == credentials.name && login.password == credentials.password) {
        console.info('logado')

        saveOnLocalStorage(login) //Salva o objeto no localStorage
    }

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

    // chama a função passando como @param a const user
    formValidation(user)
    clear()
})

// Manipulando o localStorage
function saveOnLocalStorage(item) {
    itemForStorage.push(item) //insere o item recebido no Array
    // transforma o array em String e salva com o nome loginData
    localStorage.setItem('loginData', JSON.stringify(itemForStorage))
}

// procura dados salvos com a chave 'loginData'
function getSaved() {
    let saved = JSON.parse(localStorage.getItem('loginData'))
    // se o retorno de saved for !null ou !false, redireciona para a pagina de logout
    if(saved) {
        window.location.href = './logout.html'
    }
}

function logOut() {
    // limpa o localStorage
    localStorage.clear('loginData')
    alert('Log out realizado.')
    window.location.href = './index.html'
}

getSaved()