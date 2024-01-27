// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

let calc = (a, b) => {
  return a === b ? 3 * (a + b) : a + b;
};
console.log(calc(10, 20)); //30
console.log(calc(10, 10)); //60
