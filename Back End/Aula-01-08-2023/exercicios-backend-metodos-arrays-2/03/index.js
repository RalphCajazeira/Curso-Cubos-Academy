// const palavras = ["arroz", "feijão", "carne", "cerveja", s"macarrão"]
const palavras = ["arroz", "feijão", "carne", "macarrão"]

const bebidasProibidas = ["cerveja", "vodka",];



function validarCompras(bebidasProibidas, palavras) {
    const resultado = palavras.some((palavra) => {
        return bebidasProibidas.includes(palavra)
    })

    if (resultado) {
        console.log('revise sua lista, joão. possui bebida com venda proibida!');
    } else {
        console.log('tudo certo, vamos as compras!');
    }
}

validarCompras(bebidasProibidas, palavras)