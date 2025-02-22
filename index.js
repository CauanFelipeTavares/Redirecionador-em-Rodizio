const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

const PORT = process.env.PORT || 8000
const links = [ 
    'https://api.whatsapp.com/send/?phone=5511932523135&text&type=phone_number&app_absent=0',
    'https://api.whatsapp.com/send/?phone=5511970502899&text&type=phone_number&app_absent=0',
    'https://api.whatsapp.com/send/?phone=5511937714586&text&type=phone_number&app_absent=0',
]
let index = 0

app.get('/', (req, res) => {
    res.redirect(links[index++ % links.length])
})

app.listen(PORT)