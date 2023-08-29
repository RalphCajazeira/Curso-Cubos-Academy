let { alunos } = require('../data/bancodedados')
let { gerarIdAluno } = require('../data/bancodedados')

function listarAlunos(req, res) {
    return res.status(200).json(alunos)
}


function obterAluno(req, res) {
    const { id } = req.params;
    let aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })


    if (!id || isNaN(id)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    }
    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não foi encontrado.' })
    }
    return res.status(200).json(aluno)
}

function criarAluno(req, res) {
    const { nome, sobrenome, idade, curso } = req.body;
    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'Todos os campos precisas ser preenchidos' })
    }

    if (!nome.trim() || !sobrenome.trim() || !curso.trim()) {
        return res.status(400).json({ mensagem: 'Algum campo está somente com espaços, precisa preencher corretamente' });
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'Não é permitido cadastrar pessoas menores de idade' })
    }
    const novoAluno = {
        id: gerarIdAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }
    alunos.push(novoAluno)
    return res.status(201).json()
}

function excluirAluno(req, res) {
    const { id } = req.params;

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })


    if (!id || isNaN(id)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    }
    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não foi encontrado.' })
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    })
    return res.status(200).json(aluno)

}


module.exports = {
    listarAlunos,
    obterAluno,
    criarAluno,
    excluirAluno
}