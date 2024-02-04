// 83. Write a JavaScript program to find the longest string from a given array of strings.

const longest_string = (arr) => {
  let longestString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
};
console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"])); // aaaaa

// Way2
const longest_string2 = (arr) => {
  let g = arr.map((x) => x.length);
  let index = g.indexOf(Math.max(...g));
  return arr[index];
};
console.log(longest_string2(["a", "aa", "aaa", "aaaaa", "aaaa"])); // aaaaa
