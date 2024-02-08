// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

const sum_adjacent_difference = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.abs(arr[i] - arr[i + 1]));
  }
  result.pop();
  return result.reduce((acc, current) => acc + current);
};

console.log(sum_adjacent_difference([1, 2, 3, 2, -5])); // 10
