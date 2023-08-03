const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];


// const cepPesquisar = 00222444

function pesquisarRua(cepPesquisar, arrayEndereco) {
    const resultado = arrayEndereco.find((endereco) => {
        return endereco.cep === cepPesquisar;
    })

    console.log(resultado.rua);
}

pesquisarRua(11222333, endereços)