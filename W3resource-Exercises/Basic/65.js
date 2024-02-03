// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

let test = (str) => {
  while (str.length >= 6) {
    return str.slice(-6) == "Script";
  }
};
console.log(test("Script")); // true
console.log(test("JavaScript")); // true
console.log(test("Java Script")); // true
console.log(test("Java Scripts")); // false
