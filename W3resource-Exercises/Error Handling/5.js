// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.
const checkarr = (arr) => {
  if (arr.length == 0) {
    throw Error("Array is empty!");
  }
  console.log(arr);
};
try {
  checkarr([1, 2, 3, "g"]);
  checkarr([]);
} catch (error) {
  console.log('Error:',error.message);
}
