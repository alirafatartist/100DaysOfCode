// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
let check = (a, b) => Math.abs(a - b) == 8;
console.log(check(32, 24)); // true
console.log(check(-32, 24)); // false
console.log(check(24, 32)); // true
