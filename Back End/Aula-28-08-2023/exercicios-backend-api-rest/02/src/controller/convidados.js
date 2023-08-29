let convidados = require('../data/bancodedados')

// Funcoes Auxiliares
function buscaPorNome(nome, listaDeConvidados) {
    const convidado = listaDeConvidados.find(convidado => convidado === nome)
    return convidado
}


function listaConvidados(req, res) {
    const { nome } = req.query;
    if (!nome) {
        return res.status(200).json(convidados)
    }

    const buscarConvidado = buscaPorNome(nome, convidados)

    if (!buscarConvidado) {
        return res.status(200).json({ "mensagem": "O convidado buscado não está presente na lista." })
    }

    return res.status(200).json({ "mensagem": "Convidado presente." })
}

function cadastrarConvidado(req, res) {
    const { nome } = req.query;
    const buscarConvidado = buscaPorNome(nome, convidados)

    if (buscarConvidado) {
        return res.status(200).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }
    convidados.push(nome)
    return res.status(200).json({ "mensagem": "Convidado adicionado." })

}

function apagarConvidado(req, res) {
    const { nome } = req.params;
    const buscarConvidado = buscaPorNome(nome, convidados)

    if (buscarConvidado) {
        convidados = convidados.filter((convidado) => {
            return convidado !== buscarConvidado
        })
        return res.json({ "mensagem": "Convidado removido." })
    }

    return res.json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })


}


module.exports = {
    listaConvidados,
    cadastrarConvidado,
    apagarConvidado
}