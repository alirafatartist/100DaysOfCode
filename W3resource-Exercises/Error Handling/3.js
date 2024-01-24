// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.
function check2z(a, b) {
  if (b === 0) {
    throw Error("Error: Division by zero is not allowed.");
  }
  console.log(a / b);
}
try {
    check2z(1, 2);
  check2z(1, 0);
} catch (error) {
  console.log(error.message);
}
