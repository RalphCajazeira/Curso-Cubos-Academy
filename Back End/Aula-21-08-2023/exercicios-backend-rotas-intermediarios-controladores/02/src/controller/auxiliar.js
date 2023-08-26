function primeiraLetraMaiusculaRestoMinusculo(palavra) {
    const primeiraLetra = palavra.charAt(0).toUpperCase();
    const restoPalavra = palavra.slice(1).toLowerCase();
    return primeiraLetra + restoPalavra;
}

// const palavraOriginal = "exEmPLO";
// const novaPalavra = primeiraLetraMaiusculaRestoMinusculo(palavraOriginal);
// console.log(novaPalavra);  // Saída: "Exemplo"


module.exports = { primeiraLetraMaiusculaRestoMinusculo }