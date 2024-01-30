// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

function find(a, b) {
  return a < 40 || a > 60 || b < 40 || b > 60
    ? "Invaild Number"
    : Math.max(a, b);
}
console.log(find(10, 50)); //Invaild Number
console.log(find(45, 60)); //60
console.log(find(25, 60)); //Invaild Number
console.log(find(45, 80)); //Invaild Number
