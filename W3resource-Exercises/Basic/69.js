// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
let sum = (arr) => {
  return arr.reduce((acc, current) => acc + current);
};
console.log(sum([10, 32, 20])); //62
console.log(sum([5, 7, 9])); //21
console.log(sum([0, 8, -11])); //-3
