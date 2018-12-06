const fs = require('fs');
const { countInstances, findMatch } = require('./lib.js');

const input = fs.readFileSync('./input.txt', 'utf8').split('\n');

const productOfCount = countInstances(input);

console.log('Part 1', productOfCount);

const id = findMatch(input);

console.log('Part 2', id);