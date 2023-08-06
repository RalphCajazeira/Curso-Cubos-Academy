const numeros = [54, 22, 14, 87, 284];
// const numeros = [54, 22, 14, 10, 284];

const acharNumero = 10;
let posicaoNumeroX = -1;
let indice = 0;

for (const numero of numeros) {
    if (numero === 10) {
        posicaoNumeroX = indice;
        break;
    }
    indice++;
}

console.log(posicaoNumeroX);
