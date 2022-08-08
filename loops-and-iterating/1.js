let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"));

console.log(`You are ${age} years old.`);
for (var counter = 10; counter <= 40; counter +=10) {
  console.log(`In ${counter} years, you will be ${age + counter} years old.`);
}