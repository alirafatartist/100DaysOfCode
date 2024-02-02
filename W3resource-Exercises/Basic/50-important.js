// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.

const match = require("nodemon/lib/monitor/match");

let cap = (str) => {
  return str
    .split(" ")
    .map((x) => x.replace(x[0], x[0].toUpperCase()))
    .join(" ");
};

console.log(cap("hello world")); //Hello World
console.log(
  cap(
    "Write a JavaScript program to capitalize the first letter of each word of a given string."
  )
); //Write A JavaScript Program To Capitalize The First Letter Of Each Word Of A Given String.
