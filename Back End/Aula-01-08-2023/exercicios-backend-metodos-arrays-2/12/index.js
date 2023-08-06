const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];


function filtrarPessoas(filtroIdade, filtroProfissao, arrayPessoas) {
    const resultado = arrayPessoas.filter((pessoa) => {
        return pessoa.idade > filtroIdade && pessoa.profissao === filtroProfissao
    })

    console.log(resultado);
}

function filtrarPessoas2(filtroIdade, arrayPessoas) {
    const resultado = arrayPessoas.filter((pessoa) => {
        return pessoa.idade < filtroIdade
    })

    console.log(resultado);
}

filtrarPessoas(20, 'Programador', pessoas)
console.log('____________________________');
filtrarPessoas(30, 'Jornalista', pessoas)
console.log('____________________________');
filtrarPessoas2(30, pessoas)