// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

let started = (arr) => {
  let result = [];
  if (arr.length >= 1) {
    result.push(arr[0], arr[arr.length - 1]);
    return result;
  } else {
    return "Not valid";
  }
};
console.log(started([20, 20, 30])); // Output: [20, 30]
console.log(started([5, 2, 7, 8])); // Output: [5, 8]
console.log(started([17, 12, 34, 78])); // Output: [17, 78]
