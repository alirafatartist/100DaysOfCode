const Array_plus_array = (arr1, arr2) => {
  all = arr1.join() + "," + arr2.join();
  return all
    .split(",") //["1", "2", "3", "4", "0", "5", "6", "4"]
    .map((x) => Number(x)) // [1, 2, 3, 4, 0, 5, 6, 4]
    .reduce((acc, current) => acc + current);
};
console.log(Array_plus_array([1, 2, 3, 4], [0, 5, 6, 4])); // 1 + 2 + 3 + 4 + 0 + 5 + 6 + 4 = 25

// Amazing Short code
const Array_plus_array2 = (arr1, arr2) => {
  // arr1.concat(arr2) => [1, 2, 3, 4, 0, 5, 6, 4]
  return arr1.concat(arr2).reduce((acc, current) => acc + current);
};
console.log(Array_plus_array2([1, 2, 3, 4], [0, 5, 6, 4])); // 1 + 2 + 3 + 4 + 0 + 5 + 6 + 4 = 25
