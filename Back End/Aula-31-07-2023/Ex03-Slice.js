
// Descartar 10% do Inicio e do Final
// Aproveitar somente 80%

// const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function filtar80(dados) {
    const tamanhoArray = dados.length
    const porcentagemExclusao = Math.round(tamanhoArray * 10 / 100)
    const dadosFiltrados = dados.slice(porcentagemExclusao, -porcentagemExclusao)
    console.log(dadosFiltrados)
    console.log('Tamanos dos Dados  :', tamanhoArray)
    console.log('Tamanho da Exclusão:', porcentagemExclusao)
}

filtar80(dados)

// console.log(dadosFiltradosInicio)