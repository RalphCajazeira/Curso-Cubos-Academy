const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]


const resultado = cidades.filter((cidades) => {
    return cidades.length < 9
})

console.log(resultado.join(', '));