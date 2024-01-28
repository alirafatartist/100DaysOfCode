// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function front_back3(str) {
  let last_char = str.substring(3);
  return `${last_char + str + last_char}`;
}

console.log(front_back3("string")); //ingstringing
