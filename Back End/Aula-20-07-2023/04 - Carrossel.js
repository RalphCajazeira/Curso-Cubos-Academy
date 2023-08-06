// const sequencia = ">"
// const arrayTest = [0, 1, 2, 3, 4, 5, 6]


const sequencia = ">>>>>>>>>";

const imagens = 7;
let indice = 0;

for (const direcao of sequencia) {
    if (direcao === '>') {
        indice = (indice + 1) % imagens;
    } else if (direcao === '<') {
        indice = (indice - 1 + imagens) % imagens;
    }
}

console.log(indice);