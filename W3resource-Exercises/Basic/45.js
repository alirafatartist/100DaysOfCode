// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

let check = (a, b) => {
  return a == 15 || b == 15 || a + b == 15 || Math.abs(a - b) == 15;
};
console.log(check(15, 9));
console.log(check(25, 15));
console.log(check(7, 8));
console.log(check(25, 10));
console.log(check(5, 9));
console.log(check(7, 9));
console.log(check(9, 25));
