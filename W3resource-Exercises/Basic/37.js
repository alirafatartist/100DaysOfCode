// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

let convert = (str) => {
  if (str.length <= 3) {
    return str.toUpperCase();
  }else{
    return `${str.substring(0,3).toLowerCase() + str.substring(3,str.length)}`
  }
};
console.log(convert("ali"));//ALI
console.log(convert("PYTHON"));//pytHON
console.log(convert("py"));//PY
console.log(convert("JAVAScript"));//javAScript
