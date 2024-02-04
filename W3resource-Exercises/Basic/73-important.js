// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.

let reverse3 = (arr) => {
  return arr.reverse();
};
console.log(reverse3([5, 4, 3]));  // Output: [3, 4, 5]
console.log(reverse3([1, 0, -1]));  // Output: [-1, 0, 1]
console.log(reverse3([2, 3, 1]));   // Output: [1, 3, 2]

// Way2

let reverse3 = (arr) => {
  return arr.map((x, index, ar) => ar[ar.length - 1 - index]);
};
console.log(reverse3([5, 4, 3])); // Output: [3, 4, 5]
console.log(reverse3([1, 0, -1])); // Output: [-1, 0, 1]
console.log(reverse3([2, 3, 1])); // Output: [1, 3, 2]
