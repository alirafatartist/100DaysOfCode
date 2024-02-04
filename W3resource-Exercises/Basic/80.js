// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

let swap = (arr) => {
  let a = arr[0];
  let b = arr[arr.length - 1];
  arr[0] = b;
  arr[arr.length - 1] = a;
  return arr;
};
console.log(swap([1, 2, 3, 4])); // [4,2,3,1]
console.log(swap([0, 2, 1])); // [1,2,0]
console.log(swap([3])); // [3]
