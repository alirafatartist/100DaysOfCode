// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
let check = (a, b) => {
  return a == 50 || b == 50 || a + b == 50 
};
console.log(check(50, 50)); //true
console.log(check(20, 50)); //true
console.log(check(20, 20)); //false
console.log(check(20, 30)); //true
