const express = require('express')
const rotas = require('./rota')


const app = express()

app.use(express.json())



app.use(rotas)

app.listen(3000)