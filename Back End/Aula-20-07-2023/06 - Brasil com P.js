// palavras: que será sempre um array de strings, contendo palavras que servem como base para 
// a sua busca. As palavras são sempre com todas as letras minusculas e sem acentos
// primeiraLetra: que será sempre uma string contendo apenas um caractere (minúsculo), que deve
//  ser a primeira letra das palavras
// segundaLetra: que será sempre uma string contendo apenas um caractere (minúsculo), que deve 
// ser a segunda letra das palavras


const palavras = ["aveia", "manha", "ave"];
const primeiraLetra = "a";
const segundaLetra = "v";

let encontrouPalavra = false;


for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        console.log(palavra)
        encontrouPalavra = true

    }
}
if (!encontrouPalavra) {
    console.log("NENHUMA")
}