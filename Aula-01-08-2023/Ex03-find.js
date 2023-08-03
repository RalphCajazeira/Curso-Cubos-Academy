const carros = [
    { nome: 'Gol', marca: 'Volkswagen', ano: 2023, cor: 'Prata' },
    { nome: 'Onix', marca: 'Chevrolet', ano: 2022, cor: 'Vermelho' },
    { nome: 'HB20', marca: 'Hyundai', ano: 2021, cor: 'Branco' },
    { nome: 'Ka', marca: 'Ford', ano: 2020, cor: 'Preto' },
    { nome: 'Uno', marca: 'Fiat', ano: 2019, cor: 'Cinza' }
];

function buscarCarro(marca, arrayCarros) {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca === marca
    })

    console.log(resultado);
}

buscarCarro('Fiat', carros)