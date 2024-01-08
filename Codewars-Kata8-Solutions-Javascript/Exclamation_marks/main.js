// Remove an exclamation mark from the end of a string. For a beginner kata,
//  you can assume that the input data is always a string, no need to verify it.

const exclamation_mark = (str) => {
  return str.replaceAll("!", "");
};
console.log(exclamation_mark("hi!")); //hi
console.log(exclamation_mark("hi!!!")); //hi
