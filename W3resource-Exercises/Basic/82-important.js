// // 82. Write a JavaScript program to add two positive integers without carrying.

let addWithoutCarry = (num1, num2) => {
  let result = 0;
  let multiplier = 1;

  while (num1 > 0 || num2 > 0) {
    let digit1 = num1 % 10;
    let digit2 = num2 % 10;

    let sum = (digit1 + digit2) % 10;
    result += sum * multiplier;

    multiplier *= 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }

  return result;
};

// Example usage:
let number1 = 345;
let number2 = 456;

console.log(addWithoutCarry(number1, number2)); // Output: 791
console.log(addWithoutCarry(222, 911)); // Output: 133
console.log(addWithoutCarry(200, 900)); // Output: 100
console.log(addWithoutCarry(277, 466)); // Output: 633
