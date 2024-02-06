// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

let array_checking = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        count++;

        if (count > 2) {
          // If more than two differences found, arrays are not similar
          return false;
        }
      }
    }

    return count === 2 || count === 0;
  } else {
    return false;
  }
};

console.log(array_checking([10, 20, 30], [10, 20, 30])); // true
console.log(array_checking([10, 20, 30], [30, 10, 20])); // true
console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 40])); // false
