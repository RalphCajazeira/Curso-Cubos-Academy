const { promises } = require('dns')
const produtos = require('../data/produtos')
const { getStateFromZipcode } = require('utils-playground')

// Validacao

function buscarId(id, lista) {
    const resultado = lista.find((livro => livro.id === Number(id)))
    return resultado
}

function validarSeEhNumero(numero) {
    if (!numero || isNaN(numero)) {
        return true
    }
}


async function listaProdutos(req, res) {
    res.json(produtos)
}


async function obterProduto(req, res) {
    const id = Number(req.params.idProduto);

    if (validarSeEhNumero(id)) {
        return res.status(400).json({ "mensagem": "ID deve ser um número válido." })
    }

    const produtoAchado = produtos.find(produto => produto.id === id)

    if (!produtoAchado) {
        return res.status(404).json({ "mensagem": "ID do produto não encontrado." })
    }

    return res.status(200).json(produtoAchado)
}


async function calcularFrete(req, res) {
    const { idProduto, cep } = req.params;
    const produto = produtos.find(p => p.id === Number(idProduto));
    if (!produto) {
        return res.status(404).json({ "mensagem": "Produto não encontrado." });
    }

    try {
        const estado = await getStateFromZipcode(cep);
        let frete = produto.valor * 0.12; // Valor padrão

        if (['BA', 'SE', 'AL', 'PE', 'PB'].includes(estado)) {
            frete = produto.valor * 0.10;
        } else if (['SP', 'RJ'].includes(estado)) {
            frete = produto.valor * 0.15;
        }

        return res.json({
            produto: {
                id: produto.id,
                nome: produto.nome,
                valor: produto.valor
            },
            estado,
            frete
        });
    } catch (error) {
        return res.status(500).json({ "mensagem": "Erro ao calcular o frete." });
    }
}


const cidade = getStateFromZipcode('4014034')
cidade.then(a => { console.log(a); })

cidade.catch((erro) => {
    console.log(erro.mensagem);
})

console.log(cidade);

module.exports = {
    listaProdutos,
    obterProduto,
    calcularFrete
}