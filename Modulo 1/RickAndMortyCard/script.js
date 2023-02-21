const name = document.querySelector('[data-name]')
const status = document.querySelector('[data-status]')
const picture = document.querySelector('[data-picture]')
const specie = document.querySelector('[data-specie]')

function getCartoon() {
    fetch('https://rickandmortyapi.com/api/character/28')
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error('Ocorreu algum erro na requisição')
            }
        })
        .then(data => {
            name.textContent = `Name: ${data.name}`
            specie.textContent = `Specie: ${data.species}`
            status.textContent = `Status: ${data.status}`
            picture.setAttribute('src', data.image)
        })
}

getCartoon()