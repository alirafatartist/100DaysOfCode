// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.
const check = (n) => {
  if (n < 0) {
    throw Error("Error: Negative numbers are not allowed.")
  }
  console.log(n);
};
try{
    check(2);
    check(-7);
}catch(error){
    console.log(error.message);
}