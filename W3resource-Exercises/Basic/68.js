// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

let two_string = (str, n) => {
  return str.slice(0, n) + str.slice(str.length - n);
};
console.log(two_string("JavaScript", 2)); // Japt
console.log(two_string("JavaScript", 3)); // Javipt
