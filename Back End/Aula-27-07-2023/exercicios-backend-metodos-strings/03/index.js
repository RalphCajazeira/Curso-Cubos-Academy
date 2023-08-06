const texto = "Aprenda programar do zero na Cubos Academy";



function urlAmigavel(texto, substituir, substituto) {
    while (texto !== texto.replace(substituir, substituto)) {
        texto = texto.replace(substituir, substituto)
    }
    return texto
}




console.log(urlAmigavel(texto.toLowerCase(), ' ', '-'))