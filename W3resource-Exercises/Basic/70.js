// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

let rotate = (arr) => {
  if (arr.length == 3) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
  }
  return arr;
};
console.log(rotate([3, 4, 5])); // [ 4, 5, 3 ]
console.log(rotate([0, -1, 2])); // [ -1, 2, 0 ]
console.log(rotate([7, 6, 5])); // [ 6, 5, 7 ]
