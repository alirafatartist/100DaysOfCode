// 81. Write a JavaScript program to add two digits to a given positive integer of length two.

let add_two_digits = (n) => {
  return n
    .toString()
    .split("")
    .map((x) => +x)
    .reduce((acc, current) => acc + current);
};
console.log(add_two_digits(25)); // Output: 7 (2 + 5)
console.log(add_two_digits(50)); // Output: 5 (5 + 0)

// Way2
let add_two_digits2 = (n) => {
  return (n % 10) + Math.floor(n / 10);
};
console.log(add_two_digits2(25)); // Output: 7 (2 + 5)
console.log(add_two_digits2(50)); // Output: 5 (5 + 0)
