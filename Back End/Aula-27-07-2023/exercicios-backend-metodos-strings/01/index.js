const comentario = "PandeMia Esse COVID é muito perigoso!";
const palavrasProibidas = ['pandemiaa', 'covidd', 'perigoso'];

const comentarioUpperCase = comentario.toLocaleUpperCase()
const arrayComentario = comentario.split(' ')
let palabrasUsadasProibidas = [];

// console.log(arrayComentario)

// const palavraProibida = comentario.includes(palavrasProibidas)

// console.log(palavraProibida)

for (let i = 0; i < palavrasProibidas.length; i++) {
    let filtro = palavrasProibidas[i].toLocaleUpperCase()
    if (comentarioUpperCase.includes(filtro)) {
        palabrasUsadasProibidas.push(filtro)
    }
}

if (palabrasUsadasProibidas.length > 0) {
    console.log(`Comentário bloqueado por conter palavras proibidas,${palabrasUsadasProibidas}`)
} else {
    console.log('Comentário autorizado')
}