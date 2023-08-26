

function somarNumeros(req, res) {
    const { num1, num2 } = req.query;

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    const resultado = numero1 + numero2;

    res.send(resultado.toString())
}


function subtrairNumeros(req, res) {
    const { num1, num2 } = req.query;

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    const resultado = numero1 - numero2;

    res.send(resultado.toString())
}


function multiplicarNumeros(req, res) {
    const { num1, num2 } = req.query;

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    const resultado = numero1 * numero2;

    res.send(resultado.toString())
}


function dividirNumeros(req, res) {
    const { num1, num2 } = req.query;

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    const resultado = numero1 / numero2;

    res.send(resultado.toString())
}





module.exports = {
    somarNumeros,
    subtrairNumeros,
    multiplicarNumeros,
    dividirNumeros
}