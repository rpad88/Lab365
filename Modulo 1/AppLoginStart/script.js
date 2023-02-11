// pega o Array "loginData" no localStorage ou cria um array vazio
let storage = JSON.parse(localStorage.getItem('loginData')) || []

const credentials = {
    name: 'estudante',
    password: '2023'
}

// Cria um objeto vazio
const user = {}

// Selectors
const form = document.querySelector('#form')
const editBtn = document.querySelector('[data-edit-btn]')

function getValuesFromForm() {
    // insere atributos no objeto
    user.name = document.forms.form.name.value
    user.password = document.forms.form.password.value
    user.email = document.forms.form.email.value
    user.avatar = document.forms.form.avatar.value
}

// @param user
function loginValidation(login) {
    if(login.name == credentials.name && login.password == credentials.password) {
        console.info('logado')

        saveOnLocalStorage(login) //Salva o objeto no localStorage
    }

    return console.warn('credenciais incorretas')
}

// limpa os inputs
function clearInputs() {
    document.forms.form.name.value = ''
    document.forms.form.password.value = ''
    document.forms.form.email.value = ''
    document.forms.form.avatar.value = ''
    console.log('* inputs limpos');
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getValuesFromForm() //recupera os dados informados no formulário  
    console.log(user)
    
    // chama a função passando como @param a const user
    loginValidation(user)
    clearInputs()
})

// Manipulando o localStorage
function saveOnLocalStorage(item) {
    storage.push(item) //insere o item recebido no Array
    // transforma o array em String e salva com o nome loginData
    localStorage.setItem('loginData', JSON.stringify(storage))
}

function isLoggedIn() { 
    if(localStorage.getItem('loginData')) {
        // let redirect = alert('deseja ser redirecionado ?')
        location.href = './logout.html'
    }
}

function showData() {
    console.log('showData chamado');
    // ******** Logout page
    const img = document.querySelector('[data-img]')
    const uname = document.querySelector('[data-saved-username]')
    const email = document.querySelector('[data-saved-email]')
    const pwd = document.querySelector('[data-saved-pwd]')
    storage.forEach(item => {
        img.setAttribute('src', item.avatar)
        uname.textContent = item.name
        email.textContent = item.email
        pwd.textContent = item.password
    })
}

function editData() {
    location.href = './index.html'
    storage.forEach(item => {
        document.forms.form.name.value = item.name
        document.forms.form.password.value = item.password
        document.forms.form.email.value = item.email
        document.forms.form.avatar.value = item.avatar
    })
    stop()
}

function logOut() {
    // limpa o localStorage
    localStorage.removeItem('loginData')
    alert('Log out realizado.')
    window.location.href = './index.html'
}


function stop() {
    clearTimeout(hasLogin)
}
const hasLogin = setTimeout(isLoggedIn, 1000)
