// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
let fun = (a, b) => {
  return a + b >= 50 && a + b <= 80 ? 65 : 80;
};
console.log(fun(30, 20)); //65
console.log(fun(90, 80)); //80
