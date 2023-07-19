// Input

const montante = 90000;
const capitalInicial = 60000;
const numeroMeses = 24;

let taxaJuros; //?

// Calculos

taxaJuros = Math.pow(montante / capitalInicial, 1 / numeroMeses) - 1;
taxaJuros *= 100

// Formatar os valores de capitalInicial e montante para o formato de moeda
//const formatoMoeda = { style: 'currency', currency: 'BRL' };
//const capitalInicialFormatado = capitalInicial.toLocaleString('pt-BR', formatoMoeda);
//const montanteFormatado = montante.toLocaleString('pt-BR', formatoMoeda);

// Imprimir na Tela

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros.toFixed(3)}%, pois após ${numeroMeses} meses você teve que pagar ${montante} reais.`)