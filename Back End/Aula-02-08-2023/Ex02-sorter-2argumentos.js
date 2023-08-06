const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
]

// const ordem = a.nome.localeCompare(b.nome)


const ordenarCarros = (arrayCarros, campoOrdenacao) => {
    arrayCarros.sort((a, b) => {
        return a[campoOrdenacao].localeCompare(b[campoOrdenacao])
    });
    console.log(arrayCarros);
}

ordenarCarros(carros, 'nome')