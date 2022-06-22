const number = 4936;
const ones = number % 10;
const tens = ((number - ones) / 10) % 10;
const hundreds = ((number - ones - (10 * tens)) / 100) % 10;
const thousands = ((number - ones - (10 * tens) - (100 * hundreds)) / 1000) % 10;
console.log(number + ' ' + thousands + ' ' + hundreds + ' ' + tens + ' ' + ones);