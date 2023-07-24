
let letra = "m";
let palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

let contador = 0;

for (const i of palavras) {
    if (i[0] !== letra.toLocaleLowerCase() || i[0] !== letra.toLowerCase()) {
        contador++
    }
}

console.log(contador)