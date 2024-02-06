// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.
let checking_numbers = (n1, n2, d) => {
  return n1 % d == 0 && n2 % d == 0;
};

console.log(checking_numbers(10, 25, 5)); // true
console.log(checking_numbers(10, 20, 5)); // true
console.log(checking_numbers(10, 20, 4)); // false
