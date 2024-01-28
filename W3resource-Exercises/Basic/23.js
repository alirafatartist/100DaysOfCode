// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function swip(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  let last = result.pop();
  let first = result.shift();
  result.push(first);
  result.unshift(last);
  return result.join("");
}
console.log(swip("Swift")); // twifS
console.log(swip("We")); // eW
console.log(swip("W")); // W

// Way2
function swip2(str) {
  let mid_word = str.substring(1, str.length - 1);
  let first_char = str[0],
    last_char = str[str.length - 1];
  return str.length == 1 ? str : `${last_char + mid_word + first_char}`;
}
console.log(swip2("object")); //tbjeco
console.log(swip2("index")); // xndei
console.log(swip2("We")); // eW
console.log(swip2("W")); // W
