// 3 pontos quando vence uma partida
// 1 ponto quando empata uma partida
// nenhum ponto quando perde uma partida

const resultados = [
    "V",
    "E",
    "V",
    "E"
]


let somaPontos = 0;

for (let i of resultados) {
    if (i === "V") {
        somaPontos += 3;
    } else if (i === "E") {
        somaPontos += 1;
    }
}

console.log(somaPontos)