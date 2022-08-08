function capsIfTen(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsIfTen('hello world'));
console.log(capsIfTen('goodbye'));