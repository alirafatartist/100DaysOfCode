console.time("Execution time");
const Remove_Exclamation_Marks = (str) => {
  return str.replaceAll("!", "");
};
console.log(Remove_Exclamation_Marks("hello world!")); //hello world
console.log(Remove_Exclamation_Marks("hello! world!")); //hello world
console.timeEnd("Execution time");

// Way2
console.time("Execution time");
const Remove_Exclamation_Marks2 = (str) => {
  return str
    .split("")
    .filter((x) => x !== "!")
    .join("");
};
console.log(Remove_Exclamation_Marks2("hello world!")); //hello world
console.log(Remove_Exclamation_Marks2("hello! world!")); //hello world
console.timeEnd("Execution time");
