const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855970; //emCentavos

//seu código aqui
const corteDoLeao = 2855970;

if (portadoraDeDoenca) {
    console.log("ISENTA")
} else if (aposentada) { // Percebi que foi dada a informação então eu decidi usar.
    console.log("JÁ BASTA DE IMPOSTO COROA")
} else if (totalDeRendimentos <= corteDoLeao) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("PEGA LEAO")
}