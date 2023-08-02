const nome = 'Guido Cerqueira';


// function urlAmigavel(texto, substituir, substituto) {
//     while (texto !== texto.replace(substituir, substituto)) {
//         texto = texto.replace(substituir, substituto)
//     }
//     return texto
// }



// let nomeSemEspaco = urlAmigavel(nome, ' ', '')
// nomeSemEspaco = (`@${nomeSemEspaco}`).slice(0, 13).toLowerCase()
// console.log(nomeSemEspaco)

function criarNickName(nome) {
    let nomeSemEspaco = nome
    nomeSemEspaco = (`@${nomeSemEspaco}`).replace(/\s/g, '').slice(0, 13).toLowerCase()
    return nomeSemEspaco
}



console.log(criarNickName(nome))