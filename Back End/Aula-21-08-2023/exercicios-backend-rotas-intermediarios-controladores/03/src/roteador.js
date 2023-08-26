const express = require('express')
const roteador = express.Router();
const { listaImoveis, acharImovel } = require('./controller/imoveis')


roteador.get('/', listaImoveis)
roteador.get('/:id', acharImovel)

module.exports = roteador;