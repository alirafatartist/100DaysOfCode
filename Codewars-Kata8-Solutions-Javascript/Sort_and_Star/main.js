// Sort and Star

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars)
//  and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

const Sort_and_Star = (arr) => {
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    result += arr[0][i] + "***";
  }
  return result.slice(0, -3);
};
console.log(
  Sort_and_Star([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
); //b***i***t***c***o***i***n

// Way2
const Sort_and_Star2 = (arr) => {
  return arr[0].split("").join("***");
};
console.log(
  Sort_and_Star2([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
); //b***i***t***c***o***i***n
