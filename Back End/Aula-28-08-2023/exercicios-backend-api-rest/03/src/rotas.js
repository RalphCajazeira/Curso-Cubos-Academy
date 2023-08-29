const express = require('express')
const biblioteca = require('./controller/biblioteca')

const rotas = express()

rotas.get('/livros', biblioteca.listaDeLivros)
rotas.get('/livros/:id', biblioteca.encontrarLivro)
rotas.post('/livros', biblioteca.cadastrarLivro)
rotas.put('/livros/:id', biblioteca.substituirLivro)
rotas.patch('/livros/:id', biblioteca.alterarDesLivro)
rotas.delete('/livros/:id', biblioteca.excluirLivro)



module.exports = rotas;