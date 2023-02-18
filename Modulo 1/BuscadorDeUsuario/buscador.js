import { users } from "./users.js"

document.forms.find.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(users[3])

    let userToFind = document.forms.find.usernameToFind.value
    console.log(`Pesquisando por: ${userToFind}`);
    let indexFound = users.findIndex(users => users.username == userToFind)
    
    if(indexFound >= 0) {
        console.log(`Username encontrado no index ${indexFound}.`)

        console.log(users[indexFound])
        // console.log(JSON.stringify(users[indexFound]))
    } else {
        console.log('Username não encontrado.');
    }
})
