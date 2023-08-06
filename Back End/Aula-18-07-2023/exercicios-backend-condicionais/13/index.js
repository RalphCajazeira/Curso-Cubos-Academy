//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "pix";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const descontoCredito = 5
const descontoCheque = 3
const descontoAVista = 10

let valorFinal;
// Colquei uma verificação para ver se a forma de pagamento é valida
let formaDePagamentoValida = true;


if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    valorFinal = valorDoProduto - (valorDoProduto * descontoAVista / 100)
} else if (tipoDePagamento === "credito") {
    valorFinal = valorDoProduto - (valorDoProduto * descontoCredito / 100)
} else if (tipoDePagamento === "cheque") {
    valorFinal = valorDoProduto - (valorDoProduto * descontoCheque / 100)
} else {
    formaDePagamentoValida = false
    console.log("Forma de Pagamento Invalida, informe uma das opções: dinheiro, credito, debito ou cheque")
}


// Converter de Centavos para Reais e Formatar para mostrar o valor em Reais
if (formaDePagamentoValida) {
    valorFinal /= 100
    let valorFormatado = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    console.log(`Valor a ser pago: ${valorFormatado}`)
}