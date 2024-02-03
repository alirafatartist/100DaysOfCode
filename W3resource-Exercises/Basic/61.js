// 61. Write a JavaScript program to concatenate two strings except for their first character.

let conc = (str1, str2) => {
  return str1.slice(1) + str2.slice(1);
};
console.log(conc("PHP", "JS")); // HPS
console.log(conc("A", "B")); //
console.log(conc("AA", "BB")); // AB

// Way2
let conc2 = (str1, str2) => {
  return str1.substring(1) + str2.substring(1);
};
console.log(conc2("PHP", "JS")); // HPS
console.log(conc2("A", "B")); //
console.log(conc2("AA", "BB")); // AB
