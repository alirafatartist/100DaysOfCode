// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

let move = (str) => {
  return str.length <= 2
    ? str
    : str.substring(str.length, str.length - 3) +
        str.substring(0, str.length - 3);
};
console.log(move("python")); // honpyt
console.log(move("JavaScript")); // iptJavaScr
console.log(move("hi")); // hi

// Way2 Using slice
let move2 = (str) => {
  return str.length <= 2 ? str : str.slice(str.length - 3) + str.slice(0, -3);
};
console.log(move2("python")); // honpyt
console.log(move2("JavaScript")); // iptJavaScr
console.log(move2("hi")); // hi
