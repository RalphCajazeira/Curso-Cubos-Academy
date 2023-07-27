
// Idade <= 21 -> Jovem
// Idade >= 22 e <= 65 -> Adulto(a)
// Idade > 65 -> Idoso(a)

// function determinarFaixaEtaria(idade) {
//     if (idade <= 21) {
//         return "jovem";
//     } else if (idade <= 65) {
//         return "adulto(a)";
//     } else {
//         return "idoso(a)";
//     }
// }

// function apresentar(pessoa) {
//     const faixaEtaria = determinarFaixaEtaria(pessoa.idade)
//     console.log(`Olá meu nome é ${pessoa.nome} sou um ${faixaEtaria} de ${pessoa.idade} anos, 
//     ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
// }


const pessoa1 = {
    nome: "Ralph",
    idade: 33,
    altura: 1.73,
    profissao: "estudante",
    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria()
        console.log(`Olá meu nome é ${this.nome} sou um ${faixaEtaria} de ${this.idade} anos, 
        ${this.altura} de altura e sou ${this.profissao}`)
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade <= 65) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    }
}

const pessoa2 = {
    nome: "Maria",
    idade: 67,
    altura: 1.60,
    profissao: "engenheira"
}

pessoa1.apresentar();