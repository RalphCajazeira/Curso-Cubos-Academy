// Variaveis

const valorDaCompra = 100;
const numeroDeParcelas = 7;

let desconto = 10;
let valorDoPagamento;
let jurosParcelado;

// Pre Calculo

desconto = 1 - (desconto / 100);
jurosParcelado = 1 + 1 / 100;

// Calculos

if (numeroDeParcelas === 1) {
    valorDoPagamento = valorDaCompra * desconto;
    console.log(`Voce optou por pagar a vista, valor a ser pago com desconto é ${valorDoPagamento.toFixed(2)} Reais`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    valorDoPagamento = valorDaCompra / numeroDeParcelas;
    console.log(`Voce optou por parcelar em ${numeroDeParcelas} vezes sem juros de ${valorDoPagamento.toFixed(2)} Reais`)
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    valorDoPagamento = (valorDaCompra * jurosParcelado ** numeroDeParcelas) / numeroDeParcelas;
    console.log(`Valor a ser pago ${valorDoPagamento.toFixed(2)} reais em ${numeroDeParcelas} vezes com Juros, Totalizando ${(valorDoPagamento * numeroDeParcelas).toFixed(2)} Reais`)
} else {
    console.log("Numero de parcelas errado")
}