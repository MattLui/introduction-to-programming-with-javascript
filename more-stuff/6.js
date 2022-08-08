let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labryinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, search) {
  let matches = [];
  for (let index = 0; index < array.length; index += 1) {
    if (search.test(array[index])) {
      matches.push(array[index]);
    }
  }
  return matches;
}

console.log(allMatches(words, /lab/));