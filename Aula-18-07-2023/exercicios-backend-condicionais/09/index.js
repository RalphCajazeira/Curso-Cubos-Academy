const nota = 3;

// Nota	Conceito
// 9 a 10	A
// 8 a 8,9	B
// 6 a 7,9	C
// 4 a 5,9	D
// menos que 4	E
// const nota = 8.5;
// No exemplo acima, o seu programa deve imprimir a mensagem:

//     O estudando obteve conceito B

if (nota >= 9) { console.log("O estudando obteve conceito A") }
else if (nota >= 8) { console.log("O estudando obteve conceito B") }
else if (nota >= 6) { console.log("O estudando obteve conceito C") }
else if (nota >= 4) { console.log("O estudando obteve conceito D") }
else {
    console.log("O estudando obteve conceito E")
}