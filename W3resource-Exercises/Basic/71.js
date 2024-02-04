// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

let first_last_1 = (arr) => {
  return arr[0] == 1 ||arr[arr.length -1] == 1;
};
console.log(first_last_1([1, 3, 5])); // true
console.log(first_last_1([1, 3, 5, 1])); // true
console.log(first_last_1([2, 4, 6])); // false
