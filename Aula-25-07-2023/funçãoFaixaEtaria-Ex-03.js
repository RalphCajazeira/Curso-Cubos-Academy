
// Idade <= 21 -> Jovem
// Idade >= 22 e <= 65 -> Adulto(a)
// Idade > 65 -> Idoso(a)

function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

// const valorRetornadoPelaFuncao = determinarFaixaEtaria(66);
console.log(determinarFaixaEtaria(66))

const pessoa = {
    nome: "Ralph",
    idade: 33,
    altura: 1.73,
    profissao: "estudante"
}

function apresentacao(pessoa) {
    console.log(`Olá meu nome é ${pessoa.nome} sou um ${idade}`)
}