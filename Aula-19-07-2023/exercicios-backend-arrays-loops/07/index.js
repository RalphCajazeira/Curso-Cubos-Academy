const nomes = ["Ana", "Joana", "Carlos", "amanda", "Angela"];

let filtroLetra = "A";
let listaFiltro = [];

filtroLetra = filtroLetra.toUpperCase();

for (let i of nomes) {
    if (i[0].toUpperCase() === filtroLetra.toUpperCase()) {
        listaFiltro.push(i)
    }
}

console.log(listaFiltro)