const numeros = [8, 11, 4, 1, 21];

let menorNumero = numeros[0];
let maiorNumero = numeros[0];
let diferença;


for (let i of numeros) {
    if (i > maiorNumero) {
        maiorNumero = i
    } else if (i < menorNumero) {
        menorNumero = i
    }
}

diferença = maiorNumero - menorNumero;

console.log(diferença)