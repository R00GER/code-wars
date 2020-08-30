// https://www.codewars.com/kata/57e3f79c9cb119374600046b

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! 
// if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to 
// return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

const hello = (name) => {
    if (!name) {
      return `Hello, World!`
    } else {
      const normalized = name.toLowerCase();
      const capitalized = normalized[0].toUpperCase();
      const newName = `${capitalized}${normalized.slice(1, name.length)}`;
      return `Hello, ${newName}!`
    }
  }

console.log(hello('johN'))
console.log(hello('alice'))
console.log(hello())
console.log(hello(''))