// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

let divide = (a, b) => {
  return `${Math.round(a / b)}`.split("");
};
console.log(divide(80, 6)); // ["1","3"]
console.log(divide(60, 6)); // ["1","0"]
