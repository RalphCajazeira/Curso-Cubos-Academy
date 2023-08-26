const express = require('express');
const {
    somarNumeros,
    subtrairNumeros,
    multiplicarNumeros,
    dividirNumeros } = require('./controller/controlador')

const app = express();




app.get('/somar', somarNumeros);
app.get('/subtrair', subtrairNumeros)
app.get('/multiplicar', multiplicarNumeros)
app.get('/dividir', dividirNumeros)


app.listen(3000)