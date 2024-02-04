// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

let removes = (str) => {
  if (str[0].toLowerCase() == "p" || str[str.length - 1].toLowerCase() == "p") {
    let arr = str.split("");
    if (arr[0].toLowerCase() == "p") {
      arr.shift();
    }
    if (arr[arr.length - 1].toLowerCase() == "p") {
      arr.pop();
    }
    return arr.join("");
  } else {
    return str;
  }
};
console.log(removes("Programming")); //rogrammin
console.log(removes("PythonP")); //ython
console.log(removes("Python")); //ython
console.log(removes("JavaScript")); //JavaScript
