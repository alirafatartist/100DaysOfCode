// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.
const checkstr = (str) => {
  if (str == "") {
    throw Error("String is empty!");
  }
  console.log(str);
};
try {
  checkstr("hello");
  checkstr("");
} catch (error) {
  console.log("Error", error.message);
}
