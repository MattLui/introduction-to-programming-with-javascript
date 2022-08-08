let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(string) {
  return string.reduce((numbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      numbersArray.push(length);
    }
    
    return numbersArray;
  }, []);
}