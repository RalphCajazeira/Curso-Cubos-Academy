const express = require('express')
const { listarAlunos } = require('./controller/alunos')

const app = express()

app.get('/alunos', listarAlunos)


app.listen(3000)