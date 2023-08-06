const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let somaAcerto = 0
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            somaAcerto++;
        }

    }
    const somaNotas = (prova.valor / prova.questoes.length) * somaAcerto;
    console.log(`O aluno(a) ${prova.aluno} acertou ${somaAcerto} questões e obteve nota ${somaNotas}`)


}




corrigirProva(prova)