// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function remove_char(str, index) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  //   result.remove(index);
  return result.filter((x) => x !== result[index]).join("");
}

console.log(remove_char("w3resource", 4)); // w3reource

// Way2
function remove_char2(str, index) {
  let firstword = str.substring(0, index);
  let secondword = str.substring(index + 1);
  return firstword + secondword;
}

console.log(remove_char2("w3resource", 0)); // 3resource
