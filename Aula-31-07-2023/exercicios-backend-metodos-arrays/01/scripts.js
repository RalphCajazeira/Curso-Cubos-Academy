const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


function inverterEConverterTexto(frutas) {
    frutas.reverse()
    const textoOrdenado = frutas.join(', ')

    console.log(textoOrdenado)
}

inverterEConverterTexto(frutas)

function inverterSplice(frutas) {

    frutas.reverse()
    frutas.splice(0, 1)
    frutas.splice(frutas.length - 1, 1, 'Melão')


    console.log(frutas)
}

inverterSplice(frutas)