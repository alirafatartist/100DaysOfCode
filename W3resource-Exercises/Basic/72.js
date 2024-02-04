// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

let first_last_same = (arr) => {
  return arr[0] == arr[arr.length - 1];
};

console.log(first_last_same([10, 20, 30]));
console.log(first_last_same([10, 20, 30, 10]));
console.log(first_last_same([20, 20, 20]));
