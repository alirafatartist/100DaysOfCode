// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

let check = (a, b) => {
  return !(a % 7 == 0 || a % 11 == 0) || b % 7 == 0 || b % 11 == 0
    ? false
    : true;
};
console.log(check(14, 21));
console.log(check(14, 20));
console.log(check(16, 20));
