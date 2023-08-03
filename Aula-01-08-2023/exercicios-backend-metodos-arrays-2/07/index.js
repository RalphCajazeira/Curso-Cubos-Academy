const endereços = [
    { cep: 11111222, rua: "Rua dos Artistas" },
    { cep: 11111333, rua: "Rua Augusta" },
    { cep: 11222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function pesquisarRua(cepPesquisar, arrayEndereco) {
    const resultado = arrayEndereco.find((endereco) => {
        return endereco.cep === cepPesquisar;
    })

    console.log(resultado.rua);
}

pesquisarRua(11222333, endereços);