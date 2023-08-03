// const palavras = ["livro", "caneta", "sol", "carro", "orelha"]
const palavras = ["livro", "sol", "carro"]



function verificaPalavraInvalida(arrayPalavras) {
    const resultado = palavras.every((palavra) => {

        return palavra.length < 6

    })
    if (resultado) {
        console.log('array validado');
    } else {
        console.log('existe palavra inválida');
    }
}

verificaPalavraInvalida(palavras)