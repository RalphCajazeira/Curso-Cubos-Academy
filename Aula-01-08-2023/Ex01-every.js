const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 28 },
    { nome: 'José', idade: 30 },
    { nome: 'Ana', idade: 32 },
    { nome: 'Pedro', idade: 18 }
];

function fiscalizarFesta(arrayObjetos) {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade >= 18;
    })

    if (resultado) {
        console.log('Festa Liberada!')
    } else {
        console.log('Possui menor de idade!');
    }
}

fiscalizarFesta(pessoas)