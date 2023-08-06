const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
]

function filtrarProfessores(buscar, arrayProfessores) {
    const resultado = arrayProfessores.filter((professor) => {
        return professor.stack === buscar
    })
    console.log(`Professores ${buscar}`)

    // resultado.forEach(element => { console.log(element.nome) });

    // for (let i = 0; i < resultado.length; i++) {
    //     console.log(resultado[i].nome);
    // }
    console.log('');
    console.log(resultado)
}

filtrarProfessores('backend', professores)
filtrarProfessores('frontend', professores)