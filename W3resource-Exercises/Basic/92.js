// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

let max_difference = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.abs(arr[i] - arr[i + 1]));
  }
  result.pop();
  return Math.max(...result);
};

console.log(max_difference([1, 2, 3, 8, 9])); // 5
console.log(max_difference([1, 2, 3, 18, 9])); // 15
console.log(max_difference([13, 2, 3, 8, 9])); // 11
