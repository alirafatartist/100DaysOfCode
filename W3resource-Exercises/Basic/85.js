// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

const divide = (arr) => {
  let result = [];
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      first += arr[i];
    } else {
      second += arr[i];
    }
  }
  result.push(first);
  result.push(second);
  return result;
};
console.log(divide([1, 3, 6, 2, 5, 10])); //[ 12, 15 ]

// Way2
const divide = (arr) => {
  let result = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result[0] += arr[i];
    } else {
      result[1] += arr[i];
    }
  }

  return result;
};

console.log(divide([1, 3, 6, 2, 5, 10])); //[ 12, 15 ]
