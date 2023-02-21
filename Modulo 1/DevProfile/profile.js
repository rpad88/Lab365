// SELECTORS
const img = document.querySelector('[data-img]')
const user_name = document.querySelector('[data-name]')
const user_location = document.querySelector('[data-location]')
const followers_number = document.querySelector('[data-followers-number]')
const following_number = document.querySelector('[data-following-number]')
const hireable = document.querySelector('[data-hireable]')
const bio = document.querySelector('[data-bio]')
const search = document.querySelector('[data-search]')

document.user_search.addEventListener('submit', e => {
    e.preventDefault()

    fetch(`https://api.github.com/users/${search.value}`)
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            throw new Error("ocorreu algum erro na requisição")
        }
    })
    .then(data => {
        console.log(data)
        render(data)
    })

})

function render(data) {
    img.setAttribute('src', data.avatar_url)
    user_name.textContent = data.name
    user_location.textContent = data.location
    followers_number.textContent = data.followers
    following_number.textContent = data.following
    data.hireable ? 
    hireable.textContent = '👍' :
    hireable.textContent = '👎'
    bio.textContent = data.bio

    search.value = ''
}
