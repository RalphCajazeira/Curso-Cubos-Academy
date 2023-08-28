const express = require('express');
const rotas = require('./rotas')

const app = express();

//Intermediario para aceitar somente formato json
app.use(express.json())

app.use(rotas)

app.listen(3000)