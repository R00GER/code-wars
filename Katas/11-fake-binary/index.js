// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'.
// Return the resulting string.

const fakeBin = (x) => {
  const sequence = [...x];
  const binary = [];

  sequence.forEach((num, i) => {
    x[i] < 5 ? binary.push(0) : binary.push(1);
  });

  return binary.join("").toString();
};

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));
console.log(fakeBin("366058562030849490134388085"));
