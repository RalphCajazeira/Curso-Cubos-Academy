const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";



const posicaoDoLivro = (nomeDoLivro, arrayLivros) => {
    const resultado = arrayLivros.findIndex((livro) => {
        return livro === nomeDoLivro
    })

    console.log(`O livro está na posição ${resultado + 1}`);
}


posicaoDoLivro(nomeDoLivro, livros)