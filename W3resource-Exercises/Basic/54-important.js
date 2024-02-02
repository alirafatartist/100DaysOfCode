// 54. Write a JavaScript program to count the number of vowels in a given string.

function count(str) {
  let vowels = ["a", "i", "o", "u", "e"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == vowels[0] ||
      str[i] == vowels[1] ||
      str[i] == vowels[2] ||
      str[i] == vowels[3] ||
      str[i] == vowels[4]
    ) {
      count++;
    }
  }
  return count;
}
console.log(count("Python")); //1
console.log(count("w3resource.com")); //5

// Way2
function count(str) {
  return str.replace(/[^aioue]/g, "").length; // This replaces (removes) all characters that are not vowels from the input string str
}
console.log(count("Python")); //1
console.log(count("w3resource.com")); //5
