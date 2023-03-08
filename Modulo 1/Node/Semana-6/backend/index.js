const express = require('express')
const app = express()

// app = {
//     use,
//     listen: recebe(porta, função callback),
//     route
// }

app.listen(3333, () => {
    console.log('servidor online na porta 3333')
})