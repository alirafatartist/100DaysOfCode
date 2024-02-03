// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
function conc(str1, str2) {
  if (str1.length == str2.length) {
    return str1 + str2;
  } else {
    return str1.slice(-2) + str2.slice(-2);
  }
}
console.log(conc("Python", "JS")); //onJS
console.log(conc("ab", "cdef")); //abef
console.log(conc("Hello", "World")); //HelloWorld
