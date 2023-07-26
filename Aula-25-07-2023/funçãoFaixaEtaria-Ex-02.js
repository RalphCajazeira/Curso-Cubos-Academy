
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