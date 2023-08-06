const letras = ["A", "e", "B", "C", "E", "z"];


const buscarLetra = 'e';
let contarLetrasAchadas = 0;

for (let letra of letras) {
    if (letra.toLowerCase() === buscarLetra.toLowerCase()) {
        contarLetrasAchadas++
    }
}

if (contarLetrasAchadas > 0) {
    console.log(`Foram encontradas ${contarLetrasAchadas} letras ${buscarLetra.toUpperCase()} ou ${buscarLetra.toLowerCase()}.`)
} else {
    console.log(`Nenhuma letra ${buscarLetra.toUpperCase()} ou ${buscarLetra.toLowerCase()} foi encontrada.`)
}