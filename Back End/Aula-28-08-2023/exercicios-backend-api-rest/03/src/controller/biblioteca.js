const { livros } = require('../data/bancodedados')
let { idunicoLivros } = require('../data/bancodedados')

//Auxiliares
function buscarLivro(idDoLivro, listaDeLivros) {
    const resultado = listaDeLivros.find((livro => livro.id === Number(idDoLivro)))
    return resultado
}

function validarSeEhNumero(numero) {
    if (!numero || isNaN(numero)) {
        return true
    }
}



function listaDeLivros(req, res) {
    return res.status(200).json(livros)
}

function encontrarLivro(req, res) {
    const { id } = req.params;
    if (validarSeEhNumero(id)) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    }
    const livro = buscarLivro(id, livros)

    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro para o ID informado." })
    }
    return res.status(200).json(livro)

}


function cadastrarLivro(req, res) {
    const { titulo, autor, ano, numPaginas } = req.body;
    const novoLivro = {
        id: idunicoLivros++,
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.push(novoLivro)
    return res.status(201).json(novoLivro)
}


function substituirLivro(req, res) {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (validarSeEhNumero(id)) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    }

    let livro = livros.find(livro => livro.id === Number(id));

    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." })
    }

    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas


    return res.status(200).json({ "mensagem": "Livro substituído." });
}

function alterarDesLivro(req, res) {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (validarSeEhNumero(id)) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    }

    let livro = livros.find(livro => livro.id === Number(id))

    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser alterado para o ID informado." })
    }

    // console.log({ titulo, autor, ano, numPaginas } = req.body);


    //Estudar esse metodo
    Object.assign(livro, {
        titulo: titulo || livro.titulo,
        autor: autor || livro.autor,
        ano: ano || livro.ano,
        numPaginas: numPaginas || livro.numPaginas
    });

    // if (titulo) {
    //     livro.titulo = titulo
    // }
    // if (autor) {
    //     livro.autor = autor
    // }
    // if (ano) {
    //     livro.ano = ano
    // }
    // if (numPaginas) {
    //     livro.numPaginas = numPaginas
    // }


    return res.status(200).json({ "mensagem": "Livro substituído." });

}

function excluirLivro(req, res) {
    const { id } = req.params;

    if (validarSeEhNumero(id)) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    }

    let livroIndice = livros.findIndex(livro => livro.id === Number(id))

    if (livroIndice === -1) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser removido para o ID informado." })
    }

    livros.splice(livroIndice, 1)

    return res.status(200).json({ "mensagem": "Livro Apagado." });
}





module.exports = {
    listaDeLivros,
    encontrarLivro,
    cadastrarLivro,
    substituirLivro,
    alterarDesLivro,
    excluirLivro
}