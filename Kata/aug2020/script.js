function getAverage(marks) {
  //TODO : calculate the downwar rounded average of the marks array
  const length = marks.length;
  let total = 0;

  marks.forEach((mark) => {
    return (total += mark);
  });

  return Math.floor(total / length);
}

//   console.log(getAverage([1, 2, 2]));

function alphabetPosition(text) {
  const alphabets = [..."abcdefghijklmnopqrstuvxyz"];

  [...text].forEach((letter, i) => {
    const lowerCase = letter.toLowerCase();

    if (!lowerCase.match(/[a-z]/i)) {
      return;
    } else {
      const position = alphabets.indexOf(lowerCase) + 1;
      text = text.replace(letter, `${position.toString()} `);
    }
  });

  return text;
}

// console.log(alphabetPosition("Ronny"));

function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}

//   console.log((cockroachSpeed(2.5)));

function hello(name) {
  const length = name.length;

  if (!name) {
    return `Hello, World!`;
  } else {
    const normalized = name.toLowerCase();
    const capitalized = normalized[0].toUpperCase();
    const newName = `${capitalized}${normalized.slice(1, length)}`;
    return `Hello, ${newName}!`;
  }
}

//   console.log((hello("johN")));

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = (l, w) => {
  if (l === w) return l * w;
  else return Math.sqrt(Math.pow(l, 2) + Math.pow(w, 2)) + l + w;
};

//   console.log((areaOrPerimeter(6, 10)));
//   console.log((areaOrPerimeter(4, 4)));

function repeatStr(n, s) {
  return Array(n).fill(s).join("").toString();
}

// console.log(repeatStr(5, "Ronny"));

// const sequence = [...x];
// const binary = [];

// sequence.forEach((num, i) => {
//   x[i] < 5 ? binary.push(0) : binary.push(1);
// });

// return binary.join("").toString();

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
  let score = 0;
  const right = 4;
  const wrong = -1;
  const blank = 0;

  const answers = array1.map((answer, i) => {
    if (answer === array2[i]) {
      return right;
    } else if (answer !== array2[i] && array2[i] !== "") {
      return wrong;
    } else {
      return blank;
    }
  });

  answers.forEach((answer) => {
    score += answer;
  });

  return score > 0 ? score : 0;
}

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));

function getCount(str) {
  var vowelsCount = 0;
  const chars = [...str];
  const vowels = ["a", "e", "i", "o", "u"];

  chars.forEach((char) => {
    const isVowel = vowels.some((vowel) => vowel === char);

    if (isVowel) vowelsCount += 1;
  });

  return vowelsCount;
}

// console.log(getCount("abracadabra"));

// const getMiddle = s => {
//     const modulus = s.length % 2;
//     const length = s.length;
//     const middle = modulus === 0 ? length / 2 - 1 : length / 2 - 0.5;
//     const next = middle + 1;

//     return modulus === 0 ? `${[...s][middle]}${[...s][next]}` : `${[...s][middle]}`
//   }

const getMiddle = (s) => {
  return s.length % 2 === 0
    ? [...s]
        .splice(s.length / 2 - 1, 2)
        .join("")
        .toString()
    : [...s]
        .splice(Math.floor(s.length / 2), 1)
        .join("")
        .toString();
};

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));

function disemvowel([...str]) {
  str.forEach((char, i) => {
    if (char.match(/[aeiouAEIOU]/)) {
      str.splice(i, 1);
    }
  });

  return str.join("").toString();
}

function squareDigits(num) {
  // const stringArr = num.toString().split("");
  // const numArr = stringArr.map((num) => {
  //     num = Math.pow(+num, 2);
  //     return num
  // })

  // return +numArr.join("")
  return +num
    .toString()
    .split("")
    .map((num) => {
      num = Math.pow(+num, 2);
      return num;
    })
    .join("");
}

// console.log(squareDigits(897));

function highAndLow(numbers) {
  const numberArr = numbers.split(" ").map((num) => (num = +num));

  const min = Math.min(...numberArr);
  const max = Math.max(...numberArr);

  return `${max.toString()} ${min.toString()}`;
}

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

const accum = (s) => {
  return [...s]
    .map((letter, i) => {
      return `${letter.toUpperCase()}${letter.repeat(i).toLowerCase()}`;
    })
    .join("-");
};

// console.log(accum("abcd"));
// console.log(accum("RqaEzty"));
// console.log(accum("cwAt"));

const findShort = (s) => {
  return Math.min(...s.split(" ").map((word) => word.length));
};

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(
//   findShort(
//     "turns out random test cases are easier than writing out basic ones"
//   )
// );

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// console.log(descendingOrder(0));
// console.log(descendingOrder(1));
// console.log(descendingOrder(123456789));

function XO(str) {
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
}

// console.log(XO('xo'));
// console.log(XO("xxOo"));
// console.log(XO("xxxm"));
// console.log(XO("Oo"));
// console.log(XO("ooom"));

// Test.assertEquals(likes([]), 'no one likes this');
// Test.assertEquals(likes(['Peter']), 'Peter likes this');
// Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
// Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
// Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');

const likes = (names) => {
  const length = names.length;

  if (length === 0) return "no one likes this";
  if (length === 1) return `${names[0]} likes this`;
  if (length === 2) return `${names[0]} and ${names[1]} like this`;
  if (length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (length > 3)
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
};

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// "(123) 456-7890"

const createPhoneNumber = (numbers) => {
  const phoneNumber = numbers.map((num, i) => {
    `${num[i]}`;
  });
};

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const spinWords = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => {
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
};

// console.log(spinWords("Welcome"))
// console.log(spinWords("Hey fellow warriors"))
// console.log(spinWords("This is a test"))
// console.log(spinWords("This is another test"))
// console.log(spinWords("You are almost to the last test"))
// console.log(spinWords("Just kidding there is still one more"))
// console.log(spinWords("Seriously this is the last one"))

const findOutlier = (integers) => {
  let even = 0;
  let odd = 0;
  const evenOrOdd = integers.map((integer) => {
    if (integer % 2 === 0) even++;
    else odd++;

    return integer % 2 === 0;
  });
  
  return even > odd ? integers[evenOrOdd.indexOf(false)] : integers[evenOrOdd.indexOf(true)]
};

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))
