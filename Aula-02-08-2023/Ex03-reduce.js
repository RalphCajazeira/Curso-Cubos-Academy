const usuarios = [
    { id: 11, nome: "joao", idade: 23 },
    { id: 2, nome: "maria", idade: 18 },
    { id: 4, nome: "ana", idade: 30 },
    { id: 1, nome: "rodrigo", idade: 17 },
    { id: 123, nome: "rodrigo", idade: 17 },
]

const filtroDaPesquisa = 'idade'

function filtroMaiorIdade(usuarios, pesquisa) {
    const maiorIdade = usuarios.reduce((acumulador, elementoAtual, c, d) => {
        if (elementoAtual[pesquisa] > acumulador[pesquisa]) {
            acumulador = elementoAtual;
        }
        return acumulador
    })
    console.log((maiorIdade));
}

filtroMaiorIdade(usuarios, filtroDaPesquisa)