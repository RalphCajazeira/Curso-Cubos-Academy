const { alunos } = require('../data/alunosDB')

function listarAlunos(req, res) {
    res.send(alunos)
}


module.exports = {
    listarAlunos
}