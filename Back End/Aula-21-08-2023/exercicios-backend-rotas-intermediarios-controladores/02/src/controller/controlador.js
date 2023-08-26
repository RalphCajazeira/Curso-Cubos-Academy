const jogadores = require('../data/dados')
const { primeiraLetraMaiusculaRestoMinusculo } = require('./auxiliar')

let jogadorAtual = 0


function jogadorDaVez(req, res) {
    const nomeDoJogador = jogadores[jogadorAtual]
    jogadorAtual = (jogadorAtual + 1) % jogadores.length;


    res.send(`É a vez de ${nomeDoJogador} jogar! ----- ${jogadores}`)

}

function removerJogador(req, res) {
    const { indice } = req.query;
    if (indice >= jogadores.length) {
        res.send(`Não existe jogador no índice informado(${indice}) para ser removido.`)
    }

    jogadores.splice(indice, 1)

    res.send(jogadores)
}

function adicionarJogador(req, res) {
    const { nome, indice } = req.query;

    if (nome) {
        if (indice < jogadores.length) {
            jogadores.splice(indice, 0, primeiraLetraMaiusculaRestoMinusculo(nome))
            res.send(jogadores)
        } else if (indice >= jogadores.length) {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
        } else {
            jogadores.push(nome)
            res.send(jogadores)
        }
    } else[
        res.send('Insira um Nome')
    ]
}






module.exports = { jogadorDaVez, removerJogador, adicionarJogador }
