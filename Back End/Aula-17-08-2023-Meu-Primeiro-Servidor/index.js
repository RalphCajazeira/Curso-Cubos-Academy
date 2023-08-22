const lodash = require('lodash');

const array = [1, 2, 4, 4, 6, 7, 1];

const arrayunico = lodash.uniq(array);

console.log(arrayunico);
console.log(arrayunico.length);


// const { uniq } = require('lodash');

// const array = [1, 2, 4, 4, 6, 7, 1];

// const arrayunico = uniq(array);

// console.log(arrayunico);
// console.log(arrayunico.length);