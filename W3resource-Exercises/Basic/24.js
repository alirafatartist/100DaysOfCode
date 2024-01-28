// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function front_back(str) {
  let first_char = str[0];
  return `${first_char + str + first_char}`;
}
console.log(front_back("Swift")); // SSwiftS
console.log(front_back("a")); // aaa
