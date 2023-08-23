const carros = require('../bancodedados')


// Modelo Functions Normal
function listagemCarrro(req, res) {
    const { marca, cor } = req.query;
    let resultado = carros

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca
        })
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor
        })
    }

    res.send(resultado)
}

// Modelo Arrow Functions
const obterCarro = (req, res) => {
    const { id } = req.params;

    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(id)
    })
    res.send(carroEncontrado)
}

module.exports = {
    listagemCarrro,
    obterCarro
}