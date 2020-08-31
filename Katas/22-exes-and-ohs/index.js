// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = (str) => {
  const string = [...str];

  const exesAndOhs = {
    x: 0,
    o: 0,
  };

  string.forEach((s) => {
    if (s.match(/[xX]/g)) {
      exesAndOhs.x++;
    }
    if (s.match(/[oO]/g)) {
      exesAndOhs.o++;
    }
  });

  return exesAndOhs.x === exesAndOhs.o ? true : false;
};

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));

