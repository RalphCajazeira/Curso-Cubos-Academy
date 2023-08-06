

function imprimirData({ dia, mes, ano }) {

    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`) //poderia ter colocado aqui sem criar variáveis
}

const nascimento = {
    dia: 18,
    mes: 2,
    ano: 2021
}

imprimirData(nascimento)

// console.log(imprimirData(1, 1, 2021))