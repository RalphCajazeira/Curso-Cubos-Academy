const express = require('express');
const { obterCarro, listagemCarrro } = require('./controller/carros')
const { validarSenha } = require('./intermediario');

const app = express();

app.use('/', validarSenha);

app.get('/carros', listagemCarrro);
app.get('/carros/:id', obterCarro);

app.listen(3000)