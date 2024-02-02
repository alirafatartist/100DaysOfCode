// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.

let create = (str) => {
  return str.length >= 2 ? str.slice(1, -1) : "";
};

console.log(create("JavaScript"));

// Way2
let create2 = (str) => {
  return str.substring(1, str.length - 1);
};

console.log(create2("JavaScript"));
