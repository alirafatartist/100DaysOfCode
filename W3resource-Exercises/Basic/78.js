// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

let is13 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 1 || arr[i] !== 3) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(is13([7, 8])); // true, as neither 1 nor 3 is present
console.log(is13([3, 2])); // false, as 3 is present
console.log(is13([0, 1])); // false, as 1 is present
