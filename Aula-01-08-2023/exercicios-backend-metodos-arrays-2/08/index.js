const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const resultado = frutas.map((fruta, indice) => {
    const novoArray = fruta.charAt(0).toUpperCase() + fruta.slice(1).toLowerCase();
    return `${indice} - ${novoArray}`
})

console.log(resultado);

// const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

// const novoArray = frutas.map((fruta, indice) => {
//   const frutaFormatada = fruta.charAt(0).toUpperCase() + fruta.slice(1).toLowerCase();
//   return `${indice} - ${frutaFormatada}`;
// });

// console.log(novoArray);
