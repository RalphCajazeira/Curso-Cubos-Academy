

const pessoa = {
    nome: "Ralph",
    idade: 33,
    altura: 1.72,
    temCNH: true,
    apelidos: ["MTK", "TK", "Trakino"]

}
let textoCNH = "";

textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";
textoApelidos = pessoa.apelidos.length === 1 ? "o apelido é" : "seus apelidos são";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos ${pessoa.altura}m ${textoCNH} e ${textoApelidos}:`)
for (let i of pessoa.apelidos) {
    console.log(`- ${i}`)
}