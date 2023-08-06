const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

// Verificações

const alturaDeCorte = 150;

// Menores de 12 anos
// Maiores de 65 anos
// Que possuam qualquer patologia cardíaca
// Menores de 150cm de altura

if (idade < 12 || idade > 65 || possuiPatologia || altura < alturaDeCorte) {
    console.log("ACESSO NEGADO")
    // } else if (idade < 18 || ehEstudante) {
    //     console.log("10 reais")
} else {
    const precoEntrada = (idade < 18 || ehEstudante) ? "10 reais" : "20 reais";
    console.log(precoEntrada)
    // console.log("20 reais")
}