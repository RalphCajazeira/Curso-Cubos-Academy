const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

// for (const usuario of usuarios) {
//     const idade = usuario.idade;
//     usuario.maior_idade = idade > 17;
// }


// for (let i = 0; i < usuarios.length; i++) {
//     usuarios[i].maior_idade = usuarios[0].idade > 17
// }

for (const usuario of usuarios) {
    usuario.maior_idade = usuario.idade > 17;

}


console.log(usuarios);
