const fs = require('fs');
const { countInstances } = require('./lib.js');

const input = fs.readFileSync('./input.txt', 'utf8').split('\n');

const productOfCount = countInstances(input);

console.log('Part 1', productOfCount);

