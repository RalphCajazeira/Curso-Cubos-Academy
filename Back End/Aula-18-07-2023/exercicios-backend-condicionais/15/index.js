const primeiroNome = "Mario";
const sobrenome = "Dias";
const apelido = "Picapau";

if (apelido) {
    console.log(apelido)
} else if (sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`)
} else {
    console.log(primeiroNome)
}