// 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.

let check = (a, b, c) => {
  return a >= 20 && b >= 20 && c >= 20;
};
console.log(check(20, 20, 20)); //true
console.log(check(10, 20, 20)); //false
console.log(check(20, 21, 50)); //true
