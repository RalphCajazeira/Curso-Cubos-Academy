const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = numeros[0];

for (let i of numeros) {
    if (i > maiorNumero) {
        maiorNumero = i
    }
}

console.log(maiorNumero)