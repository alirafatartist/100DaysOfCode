// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

let check = (n, b = 100, c = 400) => {
  if (Math.abs(b - n) <= 20) {
    return true;
  } else if (Math.abs(c - n) <= 20) {
    return true;
  } else {
    return false;
  }

  // Way 2
  //   return Math.abs(b - n) <= 20 || Math.abs(c - n) <= 20;
};

console.log(check(10));
console.log(check(90));
console.log(check(99));
console.log(check(199));
console.log(check(200));
