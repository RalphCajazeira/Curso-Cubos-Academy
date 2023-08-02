const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Ralph', 'Tata', 'Excluído'];
const tamanhoDoGrupo = 4;


function separarGrupos(nomes, tamanho) {
    let grupos = [];

    for (let i = 0; i < nomes.length; i += tamanho) {
        grupos.push(nomes.slice(i, i + tamanho));
    }

    for (let i = 0; i < grupos.length; i++) {
        console.log(`Grupo ${i + 1}: ${grupos[i].join(', ')}`)
    }

}


separarGrupos(nomes, tamanhoDoGrupo)