



const valor = '1,350,000'

let novoValor = '';



// function replaceAll(texto, novoTexto, substituir, substituto) {
// for (let i of texto) {
//     iconvertido = i.replace(substituir, substituto)
//     novoValor += iconvertido
// }
// return novoTexto
// }

// replaceAll(valor, novoValor, ',', '.')

// console.log(novoValor)

function substituirAlgo(original, texto, novoTexto) {
    while (original !== original.replace(texto, novoTexto)) {
        original = original.replace(texto, novoTexto)
    }
    return original
}



console.log(substituirAlgo(valor, ',', '.'))