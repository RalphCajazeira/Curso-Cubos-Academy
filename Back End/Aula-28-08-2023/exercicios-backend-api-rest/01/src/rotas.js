const express = require('express')
const alunos = require('./controller/alunos')

const rotas = express()


rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.obterAluno);
rotas.post('/alunos', alunos.criarAluno);
rotas.delete('/alunos/:id', alunos.excluirAluno);

module.exports = rotas;