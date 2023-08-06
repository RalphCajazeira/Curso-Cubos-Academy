// const usuários = [
//     {
//         nome: "André",
//         idade: 29,
//         habilitado: true,
//     },
//     {
//         nome: "Marcos",
//         idade: 70,
//         habilitado: true,
//     },
//     {
//         nome: "Ana",
//         idade: 35,
//         habilitado: true,
//     },
//     {
//         nome: "Vinícius",
//         idade: 44,
//         habilitado: true,
//     },
//     {
//         nome: "Carlos",
//         idade: 17,
//         habilitado: false,
//     },
//     {
//         nome: "Maria",
//         idade: 19,
//         habilitado: true,
//     },
// ];

const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    }
]

function filtrar18a65(arrayUsuarios) {
    const resultado = arrayUsuarios.filter((usuario) => {
        return usuario.idade >= 18 && usuario.idade <= 65
    })
    return resultado
}

const usuariosFiltrados = filtrar18a65(usuários)

function todosHabilitados(arrayUsuarios) {
    const resultado = arrayUsuarios.every((usuario) => {
        return usuario.habilitado === true
    })

    if (resultado) {
        console.log('todos passaram no teste.');
    } else {
        console.log('todos precisam estar habilitados');
    }
}

todosHabilitados(usuariosFiltrados)

// todosHabilitados(usuariosFiltrados)
// filtrar18a65(usuários)