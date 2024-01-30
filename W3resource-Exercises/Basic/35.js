// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

let find = (str, l) => {
  let result = [];
  let edited = str.substring(1, 4);
  for (let i = 0; i < edited.length; i++) {
    result.push(edited[i]);
  }
  return result.includes(l);
};
console.log(find("hello", "e")); //true
console.log(find("JavaScript", "S")); //false
console.log(find("Console", "e")); //false
console.log(find("Console", "C")); //false
console.log(find("Console", "o")); //true
console.log(find("JavaScript", "a")); //true
console.log(find("Python", "y")); //true

// way2
let find2 = (str, l) => {
  let edited = str.substring(1, 4);
  return edited.includes(l);
};
console.log(find2("hello", "e")); //true
console.log(find2("JavaScript", "S")); //false
console.log(find2("Console", "e")); //false
console.log(find2("Console", "C")); //false
console.log(find2("Console", "o")); //true
console.log(find2("JavaScript", "a")); //true
console.log(find2("Python", "y")); //true
