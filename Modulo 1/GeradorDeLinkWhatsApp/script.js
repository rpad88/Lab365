const link = document.querySelector('[data-string]')

document.wpp.addEventListener('submit', (e) => {
    e.preventDefault()
    send()

    document.wpp.cel.value = ''
    document.wpp.msg.value = ''
})

function send() {
    let cel = document.wpp.cel.value
    let msg = document.wpp.msg.value
    
    if(isNaN(cel)) {
        throw new Error('Favor informar um número de telefone válido.')
    }
    if(cel.length < 12 || cel.length > 13) {
        throw new Error(`Número de telefone deve conter 12 ou 13 digitos
        exemplo: 55(xx)12345-1234`)
    }

    let final_message = msg.replaceAll(' ','%20')
    console.log(cel)
    console.log(final_message)

    let api = `http://api.whatsapp.com/send?phone=${cel}&text=${final_message}`
    link.setAttribute('href', api)
    link.textContent = `Enviar mensagem`
}