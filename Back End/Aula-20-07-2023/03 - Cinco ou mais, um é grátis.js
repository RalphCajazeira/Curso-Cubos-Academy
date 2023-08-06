//Input

let precos = [100, 100, 100, 50];

let menorValor = precos[0] // Iniciando essa variavel com o indice 0 do Array
let totaProdutos = 0; // Usado para armazenar a soma dos numeros na Array
let totalComDesconto; // Iniciei essa variavel para usar ela depois para calcular o desconto
let descontoAcimaDeXProdutos = 5; // Numero de produtos para implementar o desconto

// Calculos

for (const valor of precos) {
    totaProdutos += valor
    if (valor < menorValor) {
        menorValor = valor;
    }
}

// Subtraindo o valor do desconto no preco dos produtos

totalComDesconto = totaProdutos - menorValor; // Usando a variavel criada la em cima

// Imprimir na tela o valor a ser pago com o desconto

if (precos.length >= descontoAcimaDeXProdutos) {
    console.log(totalComDesconto)
} else {
    console.log(totaProdutos)
}



// Console usado para ir fazendo as verificacoes durante os testes da criacao do codigo
// console.log(menorValor)
// console.log(totaProdutos)
// console.log(totalComDesconto)
// console.log(precos.length)