


const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

//Uma maneira de achar o indice de algo que estou procurando
const posicaoDoCarlos = participantes.findIndex(participante => participante.nome === "Carlos");
console.log(posicaoDoCarlos + 1)


for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === "Carlos") {
        console.log(`Galera... O Carlos está na posição ${i + 1}, corre lá!`)
    }
}