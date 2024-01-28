// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
let check = (str) => {
  let index = str.substring(0, 4);
  return index == "Java" ? index : str;
};
console.log(check("Javascript")); //Java
console.log(check("CoffeeScript")); // CoffeeScript
