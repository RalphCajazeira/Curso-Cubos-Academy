//valor do produto comprado.
const valorDoProduto = 10000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 3000;

let valorDasParcelas = valorDoProduto / quantidadeDoParcelamento;
let parcelasRestantes = quantidadeDoParcelamento - (valorPago * quantidadeDoParcelamento / valorDoProduto);


console.log(`Restam ${parcelasRestantes} parcelas de R$ ${valorDasParcelas.toFixed(2)}`)



// console.log(valorDasParcelas)
// console.log(parcelasRestantes)