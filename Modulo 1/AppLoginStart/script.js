const user = {
    name: 'estudante',
    password: '2023'
}



const uName = document.getElementById('uName')
const pwd = document.querySelector('#pwd')

const handleUserNameChange = (e) => {
    user.name = event.target.value
}

const handlePasswordChange = (e) => {
    console.log(e.target.value)
}

uName.addEventListener("change", handleUserNameChange)
pwd.addEventListener('change', handlePasswordChange)