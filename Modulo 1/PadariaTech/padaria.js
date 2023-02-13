const price = document.querySelector('[data-input-price]') //seletor do input
const ul = document.querySelector('[data-ul]') //seletor da <ul>

document.forms.priceForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let i = 1
    while(i <= 50) {
        let li = document.createElement('li')
        li.textContent = `${i} * ${(price.value)} = R$ ${(i * price.value).toFixed(2)}`
        ul.appendChild(li)
        i++
    }
    console.log('conta finalizada') 
})