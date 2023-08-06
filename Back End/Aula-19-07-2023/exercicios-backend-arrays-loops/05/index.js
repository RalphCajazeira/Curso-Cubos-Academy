const original = [1, 4, 12, 21, 53, 88, 112];


// input

const numerosPares = [];

// Calculos

for (let i of original) {
    if (i % 2 === 0) {
        numerosPares.push(i)
    }
}

console.log(numerosPares)