const alturaEmCm = 184;

//seu código aqui
const alturaMinima = 180;

if (alturaEmCm >= alturaMinima) {
    if (alturaEmCm <= 185) console.log("LÍBERO")
    else if (alturaEmCm <= 195) console.log("PONTEIRO")
    else if (alturaEmCm <= 205) console.log("OPOSTO")
    else if (alturaEmCm > 185) console.log("CENTRAL")
} else {
    console.log("REPROVADO")
}