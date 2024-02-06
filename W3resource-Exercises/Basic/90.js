// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.

let Kth_greatest_in_array = (arr, k) => {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
};

console.log(Kth_greatest_in_array([1, 2, 6, 4, 5], 3)); // 4
console.log(Kth_greatest_in_array([-10, -25, -47, -36, 0], 1)); // 0
