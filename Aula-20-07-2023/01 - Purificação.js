

const stringCorrompida = "* Canis % lupus ) familiaris";
let nomeCorreto = "";

// Calculos

for (let i of stringCorrompida) {
    if (i === " ") {
        nomeCorreto += " "
    } else if ((i >= "a" || i >= "A") && (i <= "z" || i <= "Z")) {
        nomeCorreto += i
    }

}

console.log(nomeCorreto.toUp)