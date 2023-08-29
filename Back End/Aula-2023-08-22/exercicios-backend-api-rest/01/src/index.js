const express = require('express');
const rotas = require('./rotas')
const autenticacao = require('./intermediario')

const app = express();

//Intermediario para aceitar somente formato json
app.use(express.json())
app.use(autenticacao);

app.use(rotas)

app.listen(3000)