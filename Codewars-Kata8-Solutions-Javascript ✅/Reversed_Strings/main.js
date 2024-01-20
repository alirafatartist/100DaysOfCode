const Reversed_Strings = (str) => {
  let arr = [...str];
  return arr.toReversed().join("");
};

console.log(Reversed_Strings("hello")); //olleh

// Way2
const Reversed_Strings2 = (str) => {
  return str.split("").toReversed().join("");
};

console.log(Reversed_Strings2("hello")); //olleh

// Way3
// this way is reverse the normal for loop
const Reversed_Strings3 = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

console.log(Reversed_Strings3("hello")); //olleh
