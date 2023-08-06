// //renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300;

// // Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// // Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;


const renda = 200000
let parcelaMensal = 0;
const porcentagemParcela = 18 / 100;

// mesesDecorridos < 60 && totalJaPagoPeloAluno < 1800000) 

if (rendaMensalEmCentavos > renda) {
    parcelaMensal = rendaMensalEmCentavos * porcentagemParcela;
    console.log(`R$ ${parcelaMensal.toFixed(2)}`)
} else {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
}