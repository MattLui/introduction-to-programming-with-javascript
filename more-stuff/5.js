function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

let string = "hello worlds"
console.log(doSomething(string));