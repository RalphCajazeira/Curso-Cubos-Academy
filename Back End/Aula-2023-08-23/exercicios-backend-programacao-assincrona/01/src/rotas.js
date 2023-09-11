const express = require('express')
const frete = require('./controller/frete')

const rotas = express()

rotas.get('/produtos', frete.listaProdutos)
rotas.get('/produtos/:idProduto', frete.obterProduto)
rotas.get('/produtos/:idProduto/frete/:cep', frete.calcularFrete)


module.exports = rotas;