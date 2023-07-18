// Input

const popInicialInfc = 1000;
const popPotencialInfec = 4;
const tempoEmDias = 7;

let popFinalInfec

// Calculos

popFinalInfec = popInicialInfc * Math.pow(popPotencialInfec, tempoEmDias / 7);

// Imprimir na Tela

console.log(`Após ${tempoEmDias} dias , o total de pessoas infectadas será de ${popFinalInfec}`);