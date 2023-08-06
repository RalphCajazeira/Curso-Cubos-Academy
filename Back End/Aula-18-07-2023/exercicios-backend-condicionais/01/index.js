const jogada1 = "papel"
const jogada2 = "papel"

//seu código aqui

// 3 Possibilidades de Vitoria

if (jogada1 === jogada2) {
    // Verificar se é um Empate
    console.log("Empate")
} else if (
    jogada1 !== "pedra" && jogada1 !== "papel" && jogada1 !== "tesoura" ||
    jogada2 !== "pedra" && jogada2 !== "papel" && jogada2 !== "tesoura") {
    console.log("Jogada inválida");
} else if
    // Verifica se jogador 1 ganha
    ((jogada1 === "pedra" && jogada2 === "tesoura") ||
    (jogada1 === "papel" && jogada2 === "pedra") ||
    (jogada1 === "tesoura" && jogada2 === "papel")) {
    console.log(jogada1)
} else {
    // Caso jogador 1 não ganhe
    console.log(jogada2)
}
