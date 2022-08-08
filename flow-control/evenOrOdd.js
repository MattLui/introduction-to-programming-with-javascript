function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("Error");
    return;
  }
  
  if ((number % 2) === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(6.9);