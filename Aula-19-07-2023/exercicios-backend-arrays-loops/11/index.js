// const original = [5, 7, 13, 17, 26, 34, 118, 245];
const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

// seu codigo aqui
let novaOriginal = [];

for (let i of original) {
    if (i >= 10 && i <= 20) {
        novaOriginal.push(i)
    } else if (i > 100) {
        novaOriginal.push(i)
    }
}

console.log(novaOriginal)