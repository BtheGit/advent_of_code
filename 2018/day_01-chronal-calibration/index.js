const fs = require('fs');
const sumFrequency = require('./sumFrequency.js');
const getFirstRepeatedFrequency = require('./getFirstRepeatedFrequency.js');

const input = fs.readFileSync('./input.txt', 'utf8').split('\n').map(str => parseInt(str));

const partOneResult = sumFrequency(input);

console.log({ partOneResult });

const partTwoResult = getFirstRepeatedFrequency(input);

console.log({ partTwoResult })