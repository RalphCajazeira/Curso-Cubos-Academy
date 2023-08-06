const texto = 'Cubos Academy'

console.log(texto)


// Usei esse metodo mas a aula que usa ele vem depois

// function inverterTexto(valor) {
//     const arrayDeLetras = valor.split('')
//     console.log(arrayDeLetras)
//     arrayDeLetras.reverse()
//     const textoInvertido = arrayDeLetras.join('');

//     console.log(textoInvertido)
// }


function inverterTexto(valor) {
    const arrayDeLetras = valor.split('')
    console.log(arrayDeLetras)
    arrayDeLetras.reverse()
    textoInvertido = ''
    for (let i of arrayDeLetras) {
        textoInvertido += i
    }

    console.log(textoInvertido)
}


inverterTexto(texto)