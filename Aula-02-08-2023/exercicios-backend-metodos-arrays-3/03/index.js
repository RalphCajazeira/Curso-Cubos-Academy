const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNumero = numeros.reduce((a, b) => {
    if (b > a) {
        a = b
    }
    return a
})

console.log(maiorNumero);