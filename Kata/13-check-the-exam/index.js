// https://www.codewars.com/kata/5a3dd29055519e23ec000074

// The first input array is the key to the correct answers to an exam,
// like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers,
// giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer,
// represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

const checkExam = (array1, array2) => {
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
};

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
