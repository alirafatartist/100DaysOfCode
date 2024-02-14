// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.

function rearrangement_characters(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const person = { name: "John", age: 30 };
  const charCountMap1 = {};
  const charCountMap2 = {};
  for (const char of str1) {
    charCountMap1[char] = (charCountMap1[char] || 0) + 1;
  }
  for (const char of str2) {
    charCountMap2[char] = (charCountMap2[char] || 0) + 1;
  }
  // Compare character counts for each character
  for (const char in charCountMap1) {
    if (charCountMap1[char] !== charCountMap2[char]) {
      return false;
    }
  }
  return true;
}

console.log(rearrangement_characters("xyz", "zyx"));
console.log(rearrangement_characters("xyz", "zyp"));
