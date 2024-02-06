// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
// Function to find the maximum difference between any two elements in an array

function array_max_diff(arr) {
  var max_result = 0; // Initialize the variable to store the maximum difference

  // Iterate through the array elements
  for (var i = 0; i < arr.length; i++) {
    // Iterate through other elements in the array
    for (var k = 0; k !== i && k < arr.length; k++) {
      var diff = Math.abs(arr[i] - arr[k]); // Calculate the absolute difference
      max_result = Math.max(max_result, diff); // Update the maximum difference
    }
  }

  return max_result; // Return the final maximum difference
}

// Example usage
console.log(array_max_diff([1, 2, 3, 8, 9])); // 8
console.log(array_max_diff([1, 2, 3, 18, 9])); // 17
console.log(array_max_diff([13, 2, 3, 8, 9])); // 11
