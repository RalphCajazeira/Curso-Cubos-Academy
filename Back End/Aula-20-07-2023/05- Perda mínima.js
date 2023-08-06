

const precos = [5, 10, 3];

let menorPerda = Infinity;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        if (precos[j] < precos[i] && precos[i] - precos[j] < menorPerda) {
            menorPerda = precos[i] - precos[j];
        }
    }
}

console.log(menorPerda);