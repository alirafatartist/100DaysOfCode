// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
let check = (a, b) => {
  return (a < 0 && b > 0) || (b < 0 && a > 0);
};
console.log(check(1, 2)); //false
console.log(check(1, -1)); //true
console.log(check(-1, 6)); //true
console.log(check(-1, -26)); //false
