// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function check(str) {
  let arr = str.split("");
  return arr.indexOf("b") - arr.indexOf("a") == 4;
}
console.log(check("Chainsbreak")); //true
console.log(check("pane borrowed")); //true
console.log(check("abCheck")); //false
