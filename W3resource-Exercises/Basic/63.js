// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

let create = (str) => {
  let len = str.length;
  let arr = new Array(...str);

  while (arr.length > 3) {
    arr.pop();
    arr.shift();
  }
  return arr.join("");
};
console.log(create("abcdefg")); //cde
console.log(create("HTML5")); //tml
console.log(create("Python")); //th
console.log(create("PHP")); //php
console.log(create("Exercises")); //rci
console.log(create("JavaScript")); //Sc
