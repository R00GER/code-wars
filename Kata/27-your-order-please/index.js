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
