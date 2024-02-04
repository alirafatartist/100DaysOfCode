// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
let all_max = (arr) => {
  if (arr.length < 3) {
    return "Array should have at least three elements.";
  } else {
    let maxValue = Math.max(arr[0], arr[arr.length - 1]);
    return arr.map((x) => (x = maxValue));
  }
};

console.log(all_max([20, 30, 40])); // Output: [40, 40, 40]
console.log(all_max([-7, 9, 0])); // Output: [0, 0, 0]
console.log(all_max([12, 10, 3])); // Output: [12, 12, 12]

