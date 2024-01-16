// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
//  First argument is an array of numbers and the second is the divisor.

const Find_numbers_which_are_divisible_by_given_number = (arr, num) => {
  return arr.filter((x) => x % num == 0);
};
console.log(
  Find_numbers_which_are_divisible_by_given_number([1, 2, 3, 4, 5, 6], 2)
); // [2, 4, 6]

// Way2
const Find_numbers_which_are_divisible_by_given_number2 = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % num == 0 ? result.push(arr[i]) : null;
  }
  return result;
};

console.log(
  Find_numbers_which_are_divisible_by_given_number2([1, 2, 3, 4, 5, 6], 2)
); // [2, 4, 6]
