const express = require('express');
const servidor = express();

const jogadores = require('./arrayJogadores')

let jogadorAtual = 0;

servidor.get('/', (req, res) => {
    const nomeDoJogador = jogadores[jogadorAtual]
    jogadorAtual = (jogadorAtual + 1) % jogadores.length;

    res.send(`${nomeDoJogador} ${jogadorAtual}`)
})

servidor.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000');
})
