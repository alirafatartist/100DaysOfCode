// // Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

// ((n) => {
//     Math.trunc(n) !== n
//       ? console.error("Invalid number. Please input an integer.")
//       : console.log("Number is valid:", n);
// })(4.6);

// Way2

function validateInteger(n) {
  if (Math.trunc(n) !== n) {
    throw new Error("Invalid number. Please input an integer.");
  }
  console.log("Number is valid:", n);
}
try {
  validateInteger(4);
  validateInteger(4.8);
} catch (error) {
  console.log("Error:", error.message);
}
