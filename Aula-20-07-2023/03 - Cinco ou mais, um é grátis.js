//Input

let valorProdutos = [100, 500, 100, 200, 50];

let menorValor = valorProdutos[0] // Iniciando essa variavel com o indice 0 do Array
let totaProdutos = 0; // Usado para armazenar a soma dos numeros na Array
let totalComDesconto; = // Iniciei essa variavel para usar ela depois para calcular o desconto

// Calculos

for (const valor of valorProdutos) {
    totaProdutos += valor
    if (valor < menorValor) {
        menorValor = valor;
    }
}

// Subtraindo o valor do desconto no preço dos produtos

totalComDesconto = totaProdutos - menorValor; // Usando a variavel criada la em cima

// Imprimir na tela o valor a ser pago com o desconto

console.log(totalComDesconto)


// Console usado para ir fazendo as verificações durante os testes da criação do codigo
// console.log(menorValor)
// console.log(totaProdutos)
// console.log(totalComDesconto)