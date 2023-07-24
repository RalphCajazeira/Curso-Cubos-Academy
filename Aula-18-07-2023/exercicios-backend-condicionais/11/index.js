//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;


// Inicio
let valorDaParcela = rendaMensalEmCentavos * 0.18;

if (valorDaParcela > totalJaPagoPeloAluno) {
    valorDaParcela = totalJaPagoPeloAluno;
}

if (mesesDecorridos > 60) {
    valorDaParcela = 0;
}

console.log(`O valor da parcela desse mês é R$ ${valorDaParcela / 100}`)