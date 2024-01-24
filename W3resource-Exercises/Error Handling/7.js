// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.
const checkarr = (arr, index) => {
  if (index < 0 || index >= arr.length) {
    throw new RangeError(
      "Invalid index. Please provide a valid index within the array bounds."
    );
  }
  console.log(arr[index]);
};

try {
  const arrr = [1, 2, 3, 4];
  checkarr(arrr, 7);
  checkarr(arrr, 3);
} catch (error) {
  if (error instanceof RangeError) {
    console.log("Error👉", error.message);
  }else{
    console.log(error);
  }
}
