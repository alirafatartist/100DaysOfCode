// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.

let check = (num1, num2, final = 100) => {
  if (num1 < final && num2 < final) {
    if (num1 == num2) {
      return false;
    }
    return Math.max(num1, num2);
  }
};

console.log(check(90, 89)); //false
console.log(check(-90, -89)); //false
console.log(check(90, 90)); //true
