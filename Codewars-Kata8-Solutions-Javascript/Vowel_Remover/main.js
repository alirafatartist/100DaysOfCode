const Shortcut = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
    } else {
      result += str[i];
    }
  }
  return result;
};
console.log(Shortcut("mohsen")); //mhsn

// Way2
const Shortcut2 = (str) => {
  let result = "";
  let vowels = ["a", "o", "e", "i", "u"];
  for (let i = 0; i < str.length; i++) {
    vowels.includes(str[i]) ? "" : (result += str[i]);
  }
  return result;
};
console.log(Shortcut2("omar")); //mr

// Way3 using regx
const Shortcut3 = (str) => {
  return str.replace(/[aeiou]/g, "");
};
console.log(Shortcut3("mohsen")); //mhsn
