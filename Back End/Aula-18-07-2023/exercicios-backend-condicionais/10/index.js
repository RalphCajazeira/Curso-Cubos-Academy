const caractere = "A";


// Verificar se é uma vogal
if (caractere === "a" || caractere === "A" ||
    caractere === "e" || caractere === "E" ||
    caractere === "i" || caractere === "I" ||
    caractere === "o" || caractere === "O" ||
    caractere === "u" || caractere === "U") {
    if (caractere === caractere.toUpperCase()) {
        console.log("Vogal maiuscula")
    } else {
        console.log("Vogal minuscula")
    }
    // Verificar se é uma consoante
} else if ((caractere >= "a" && caractere <= "z") ||
    (caractere >= "A" && caractere <= "Z")) {
    if (caractere === caractere.toUpperCase()) {
        console.log("Consoante Maiuscula")
    } else {
        console.log("Consoante Minuscula")
    }
    // Verifica se é um número
} else if (!isNaN(caractere)) {
    console.log("Número")
    // E coloquei a mais se caso não for nenhuma opção acima
} else {
    console.log("Não é número, vogal ou consoante")
}