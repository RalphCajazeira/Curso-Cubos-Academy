// input

const numeroLados = 6; //n

let somaAngulos; //S
let valorCadaAnguloGraus; //a

// Calculos

somaAngulos = (numeroLados - 2) * 180;
valorCadaAnguloGraus = somaAngulos / numeroLados;

// Imprimir na Tela

console.log(`Soma dos Angulos ${somaAngulos}`)
console.log(`O valor de cada ângulo em graus é ${valorCadaAnguloGraus}°`)