// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
function check(num, a = 50, b = 99) {
  return num >= 50 && num <= 99;
}
console.log(check(70)); //true
console.log(check(50)); //true
console.log(check(99)); //true
console.log(check(100)); //false
console.log(check(49)); //false
