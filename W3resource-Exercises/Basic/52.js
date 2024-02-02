// 52. Write a JavaScript program to convert letters of a given string alphabetically.

let convert = (str) => {
  return str.split("").sort().join("");
};
console.log(convert("Python")); //Phnoty
console.log(convert("Exercises")); //Eceeirssx
