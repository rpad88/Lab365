// pega o Array "loginData" no localStorage ou cria um array vazio
const storage = JSON.parse(localStorage.getItem('loginData')) || []

const credentials = {
    name: 'estudante',
    password: '2023'
}

// Selectors
const form = document.querySelector('#form')
const editBtn = document.querySelector('[data-edit-btn]')

function getValuesFromForm() {
    // retorna um objeto com os atributos inseridos no formulário
    return {
        name: document.forms.form.name.value,
        password: document.forms.form.password.value,
        email: document.forms.form.email.value,
        avatar: document.forms.form.avatar.value,
        isLogged: false
    }
}

// @param user
function loginValidation(user) {
    if(user.name == credentials.name && user.password == credentials.password) {
        console.info('logado')
        user.isLogged = true
        saveOnLocalStorage(user) //Salva o objeto no localStorage
        return
    }
    return console.warn('credenciais incorretas')
}

// limpa os inputs
function clearInputs() {
    document.form.name.value = ''
    document.form.password.value = ''
    document.form.email.value = ''
    document.form.avatar.value = ''
    console.log('* inputs limpos');
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = getValuesFromForm() //recupera os dados informados no formulário  
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
    if(storage[0].isLogged) {
        // let redirect = alert('deseja ser redirecionado ?')
        location.href = './logout.html'
    }
}

//PREENCHE AS INFORMAÇÕES
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
    // pega o index do usuário
    let index = storage.findIndex(user => user.name == document.querySelector('[data-saved-username]').textContent)
    storage[index].isLogged = false //seta para false a informação de login
    // console.log(storage[index])
    localStorage.setItem('loginData', JSON.stringify(storage)) //salva
    alert('Log out realizado.')
    window.location.href = './index.html'
}


function stop() {
    clearTimeout(hasLogin)
}
const hasLogin = setTimeout(isLoggedIn, 1000)
