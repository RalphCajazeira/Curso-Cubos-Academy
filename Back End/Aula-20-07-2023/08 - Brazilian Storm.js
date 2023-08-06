

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let mediaNotas;
let menorNota = notas[0];
let maiorNota = notas[0];
let somaNotas = 0;

for (let i of notas) {
    somaNotas += i;
    if (i < menorNota) {
        menorNota = i
    } else if (i > maiorNota) {
        maiorNota = i
    }
}
somaNotas = somaNotas - menorNota - maiorNota;
mediaNotas = somaNotas / (notas.length - 2);

console.log(mediaNotas)