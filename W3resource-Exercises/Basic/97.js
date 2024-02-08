// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
let find = (str) => {
  let ar = str.split("").reverse();
  ar.shift();
  return str + ar.join("");
};

console.log(find("abcddc")); // abcddcddcba
console.log(find("122")); // 12221
console.log(find("Hello")); // HellolleH
