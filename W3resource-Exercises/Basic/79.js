// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

let twice3040 = (arr) => {
  let count30 = 0;
  let count40 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 30) {
      count30++;
    }
    if (arr[i] == 40) {
      count40++;
    }
  }
  return count30 >= 2 || count40 >= 2;
};
console.log(twice3040([30, 30])); // Should return true
console.log(twice3040([40, 40])); // Should return true
console.log(twice3040([20, 20])); // Should return false
console.log(twice3040([30])); // Should return false
