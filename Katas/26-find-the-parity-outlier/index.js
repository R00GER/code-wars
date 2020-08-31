// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// You are given an array (which will have a length of at least 3, but could be very large) 
// containing integers. The array is either entirely comprised of odd integers 
// or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const findOutlier = (integers) => {
  let even = 0;
  let odd = 0;

  const evenOrOdd = integers.map((integer) => {
    if (integer % 2 === 0) even++;
    else odd++;

    return integer % 2 === 0;
  });

  return even > odd
    ? integers[evenOrOdd.indexOf(false)]
    : integers[evenOrOdd.indexOf(true)];
};

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))
