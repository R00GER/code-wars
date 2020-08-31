// https://www.codewars.com/kata/55c45be3b2079eccff00010f

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

const order = (sentence) => {
  const letters = sentence.split("");
  const words = sentence.split(" ");
  const objectArr = [];
  const numbers = letters.map((num) => (num = +num)).filter(Boolean);
  const indexes = numbers.map((num) => num - 1);
  let obj = {};

  words.forEach((word, i) => {
    obj = {
      id: i,
      index: indexes[i],
      word,
    };

    objectArr.push(obj);
  });

  return objectArr
    .sort((a, b) => {
      return a.index - b.index;
    })
    .map((el) => el.word)
    .join(" ");
};

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// const order = (sentence) => {
//     const letters = sentence.split("");
//     const words = sentence.split(" ");
//     const newArr = [];
//     const numbers = letters.map((num) => (num = +num)).filter(Boolean);
//     const indexes = numbers.map((num) => num - 1);

//     words.forEach((word, i) => {
//       newArr.splice(indexes[i], 0, word);
//     });

//     return newArr.join(" ");
//   };
