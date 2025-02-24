const express = require('express')
const dotenv = require('dotenv')
const { ZapLink } = require('./utils')

dotenv.config()
const app = express()

const PORT = process.env.PORT || 8000
const links = [ 
    ZapLink(63981130331), ZapLink(21977327170), ZapLink(11953384611), ZapLink(41999070952),
    ZapLink(1231994328), ZapLink(13996889590), ZapLink(47988173689), ZapLink(32998442628),
    ZapLink(87999249355), ZapLink(79999383633), ZapLink(54991360190), ZapLink(91981403817),
    ZapLink(16994363511), ZapLink(91984869938), ZapLink(71996161466), ZapLink(75999888585),
    ZapLink(51984180585), ZapLink(31990784153), ZapLink(83996447586), ZapLink(4891979422),
    ZapLink(11976382337), ZapLink(19995300664), ZapLink(19991195120), ZapLink(11997922120),
    ZapLink(73991457206), ZapLink(11914255723), ZapLink(11950670242), ZapLink(38997439280),
    ZapLink(37991030433),
]
let index = 0

app.get('/lista/1', (req, res) => {
    res.redirect(links[index++ % links.length])
})

app.listen(PORT)