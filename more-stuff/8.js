function isNotANumber(number) {
  return number !== number;
}

console.log(isNotANumber(69));
console.log(isNotANumber(NaN));