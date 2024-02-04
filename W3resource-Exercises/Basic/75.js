// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

let middle_elements = (arr1, arr2) => {
  let result = [];
  result.push(arr1[1]);
  result.push(arr2[1]);
  return result;
};
console.log(middle_elements([1, 2, 3], [1, 5, 6])); // Output: [2, 5]
console.log(middle_elements([3, 3, 3], [2, 8, 0])); // Output: [3, 8]
console.log(middle_elements([4, 2, 7], [2, 4, 5])); // Output: [2, 4]
