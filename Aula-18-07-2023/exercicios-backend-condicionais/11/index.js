// //renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// // Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// // Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;


const renda = 200000
let parcelaMensal = 0;
const porcentagemParcela = 18 / 100;

if (rendaMensalEmCentavos > renda) {
    parcelaMensal = rendaMensalEmCentavos * porcentagemParcela
    console.log(parcelaMensal)
}