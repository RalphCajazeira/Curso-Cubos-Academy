const express = require('express')
const convidados = require('./controller/convidados')

const rotas = express()


rotas.get('/convidados', convidados.listaConvidados);
rotas.post('/convidados', convidados.cadastrarConvidado);
rotas.delete('/convidados/:nome', convidados.apagarConvidado);

module.exports = rotas