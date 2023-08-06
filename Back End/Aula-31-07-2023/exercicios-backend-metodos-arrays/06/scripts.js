const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function acharDonoDog(usuarios, pet) {
    let donoDoCachorro = ''

    for (let usuario of usuarios) {
        if (usuario.pets.includes(pet)) {
            donoDoCachorro = usuario.nome
            break
        }
    }
    if (donoDoCachorro !== '') {
        console.log(`O dono(a) do(a) ${pet} é o(a) ${donoDoCachorro}`)
    } else {
        console.log(`Que pena ${pet}, não encontramos seu dono(a).`)
    }
}

acharDonoDog(usuarios, 'Lulu')