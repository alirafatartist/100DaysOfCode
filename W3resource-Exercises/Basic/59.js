// 59. Write a JavaScript program to extract the first half of a even string.

let exctract = (str) => {
  let leng = str.length;
  if (leng % 2 == 0) {
    return str.substring(0, leng / 2);
  } else {
    return str;
  }
};
console.log(exctract("Python"));
console.log(exctract("JavaScript"));
console.log(exctract("PHP"));
