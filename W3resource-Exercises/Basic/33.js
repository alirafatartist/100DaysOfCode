// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function check(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(check(50, 89)); //false
console.log(check(70, 95)); //true
