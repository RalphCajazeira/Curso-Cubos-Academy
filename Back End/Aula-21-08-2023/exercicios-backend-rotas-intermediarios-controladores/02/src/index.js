const express = require('express');
const { jogadorDaVez, removerJogador, adicionarJogador } = require('./controller/controlador')

const app = express();




app.get('/', jogadorDaVez);
app.delete('/remover', removerJogador);
app.post('/adicionar', adicionarJogador);


app.listen(8000)