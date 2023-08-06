const cidades = [
    "Salvador",
    "São Pauloooooooooo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiorString = cidades.reduce((a, b) => {
    if (b.length > a.length) {
        a = b
    }
    return a
})

console.log(maiorString);