// 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
// Fox example "Write" will be write and "PHp" will be "PHP

const change_case = (str) => {
  let lower = str.match(/[a-z]/g);
  let upper = str.match(/[A-Z]/g);
  return lower.length > upper.length ? str.toLowerCase() : str.toUpperCase();
};

console.log(change_case("PHp")); // PHP
console.log(change_case("Write")); // write
