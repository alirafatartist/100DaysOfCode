// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.

const replace = (arr, n, p) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      result.push(p);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(replace([1, 2, 3, 2, 2, 8, 1, 9], 2, 5)); //[1,5,3,5,5,8,1,9]
