// In this simple exercise, you will build a program that takes a value, integer ,
//  and returns a list of its multiples up to another value, limit . If limit is a multiple of integer,
//   it should be included as well. There will only ever be positive integers passed into the function,
//  not consisting of 0. The limit will always be higher than the base.

const Find_Multiples_of_a_Number = (n, limit) => {
  let result = [];
  for (let i = 1; n * i <= limit; i++) {
    result.push(n * i);
  }
  return result;
};
console.log(Find_Multiples_of_a_Number(5, 25)); // [5, 10, 15, 20]
console.log(Find_Multiples_of_a_Number(1, 2)); // [1]
console.log(Find_Multiples_of_a_Number(5, 7)); // [5]
console.log(Find_Multiples_of_a_Number(4, 27)); // [4, 8, 12, 16, 20, 24]

// Way2
const Find_Multiples_of_a_Number2 = (integer, limit) => {
  let finalArr = [];
  for (let i = integer; i <= limit; i += integer) {
    finalArr.push(i);
  }
  return finalArr;
};
console.log(Find_Multiples_of_a_Number2(5, 25)); // [5, 10, 15, 20]
console.log(Find_Multiples_of_a_Number2(1, 2)); // [1]
console.log(Find_Multiples_of_a_Number2(5, 7)); // [5]
console.log(Find_Multiples_of_a_Number2(4, 27)); // [4, 8, 12, 16, 20, 24]
