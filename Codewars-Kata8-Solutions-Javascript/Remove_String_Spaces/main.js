const Remove_String_Spaces = (str) => {
  let myArr = str.split(" ");
  let result = "";
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] != " ") {
      result += myArr[i];
    }
  }
  return result;
};
console.log(Remove_String_Spaces("i love js")); // ilovejs

// Amazing short code
const Remove_String_Spaces2 = (str) => {
  return str.split(" ").join("");
};
console.log(Remove_String_Spaces2("h e l l o")); //hello
