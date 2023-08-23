const express = require('express');

const {
    obterCarro,
    listagemCarrro
} = require('./controladores/carros')

const app = express();

app.get('/carros', listagemCarrro);
app.get('/carros/:id', obterCarro);


app.listen(3000)