// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function check(num, a = 3, b = 7) {
  if (num < 0) {
    return "invalid number";
  }
  return num % a == 0 || num % b == 0;
}
console.log(check(12)); //true
console.log(check(14)); //true
console.log(check(10)); //false
console.log(check(11)); //false
console.log(check(-12)); //invalid number
