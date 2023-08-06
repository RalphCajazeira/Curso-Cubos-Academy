

const disparos = [0, 50, 90, 80, 100, 80, 40];



let pontosAcimaDe70 = []

for (let i of disparos) {
    if (i > 70) {
        pontosAcimaDe70.push(i)
    }
}

if (pontosAcimaDe70.length >= 3) {
    console.log(`O competidor conseguiu ${pontosAcimaDe70.length} tiros acima de 70 pontos: ${pontosAcimaDe70} novamente.`)
} else {
    console.log("ELIMINADO")
}