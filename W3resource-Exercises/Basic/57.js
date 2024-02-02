// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

let creat = (str, n) => {
  let result = "";
  if (n < 0) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
};
console.log(creat("abc", 5)); // abcabcabcabcabc
console.log(creat("abc", 0)); //
console.log(creat("abc", -1)); // false

// Way2
let creat2 = (str, n) => {
  return n < 0 ? false : str.repeat(n);
};
console.log(creat2("abc", 5)); // abcabcabcabcabc
console.log(creat2("abc", 0)); //
console.log(creat2("abc", -1)); // false
