// Input

const capitalInicial = 1000;
const tempoInvestido = 5;
let taxaDeJuros = 12.5;
let montante;

//Pré Calculo

taxaDeJuros /= 100;

// Calculo.

montante = capitalInicial * Math.pow((1 + taxaDeJuros), 5);

//Imprimir na Tela

console.log(`Seu montante acumulado é de ${montante} Reais`);
console.log(`Voce teve um ganho de ${montante - capitalInicial} Reais em ${tempoInvestido} Meses`);