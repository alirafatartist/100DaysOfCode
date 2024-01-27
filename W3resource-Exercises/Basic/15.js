// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

let calc = (a, b = 13) => {
  return a > b ? 2 * (a - b) : b - a;
};
console.log(calc(32));
console.log(calc(11));
