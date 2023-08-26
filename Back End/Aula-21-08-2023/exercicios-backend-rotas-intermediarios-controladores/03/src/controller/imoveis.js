const imoveis = require('../data/imoveis')

function listaImoveis(req, res) {
    res.send(imoveis)
}

function acharImovel(req, res) {
    const { id } = req.params;

    const imovelEncontrado = imoveis.find(imovel => imovel.id === Number(id))
    res.send(imovelEncontrado)
}

module.exports = { listaImoveis, acharImovel }