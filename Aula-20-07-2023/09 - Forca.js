

const palpite = "a";
const palavra = "abelha";


let contador = 0;

for (let i of palavra) {
    if (i === palpite) {
        contador++
    }
}

console.log(contador)