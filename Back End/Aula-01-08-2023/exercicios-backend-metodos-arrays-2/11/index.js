const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const letraFiltrada = 'a'

const resultado = nomes.filter((nome) => {
    return nome.charAt(0).toLowerCase() === letraFiltrada.toLowerCase()
})

console.log(resultado);