// const { uniq } = require('lodash');

// const array = [1, 2, 4, 4, 6, 7, 1];

// const arrayunico = uniq(array);

// console.log(arrayunico);
// console.log(arrayunico.length);


const lodash = require('lodash');
const { arrayLetras, arrayNumeros } = require('./array')

console.log(arrayLetras);
console.log(arrayNumeros);

const arrayNumeroUnico = lodash.uniq(arrayNumeros);
const arrayLetraUnico = lodash.uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnico);