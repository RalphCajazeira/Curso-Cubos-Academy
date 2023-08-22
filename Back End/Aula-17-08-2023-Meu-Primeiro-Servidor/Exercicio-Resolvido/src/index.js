const express = require('express');
const servidor = express()

const usuarios = require('./usuarios');



servidor.get('/usuarios', (requisicao, resposta) => {
    resposta.send(usuarios)
});


servidor.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000');
})