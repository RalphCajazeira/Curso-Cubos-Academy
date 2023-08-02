const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 0;

function filtrarNomes(nomes, posicao) {
    const filtroNomes = nomes.slice(posicao, posicao + 3)

    console.log(filtroNomes.join(' - '))
}

filtrarNomes(nomes, posicao)
