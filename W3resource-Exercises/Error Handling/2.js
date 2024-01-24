//  Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object
try {
  const myObj = undefined;
  console.log(myObj.age);
} catch (error) {
  error instanceof TypeError
    ? console.log("Error: Property access to undefined object")
    : console.log(error);
}
