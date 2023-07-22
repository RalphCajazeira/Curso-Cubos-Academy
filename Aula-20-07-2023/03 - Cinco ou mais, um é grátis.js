//Input

let valorProdutos = [100, 500, 100, 200, 50];

let menorValor = valorProdutos[0]
let totaProdutos = 0;
let totalComDesconto;

// Calculos

for (const valor of valorProdutos) {
    totaProdutos += valor
    if (valor < menorValor) {
        menorValor = valor;
    }
}

// Subtraindo o valor do desconto no preço dos produtos

totalComDesconto = totaProdutos - menorValor;

// Imprimir na tela o valor a ser pago com o desconto

console.log(totalComDesconto)


// Console usado para ir fazendo as verificações
// console.log(menorValor)
// console.log(totaProdutos)
// console.log(totalComDesconto)