// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

let getLetter = (str) => {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let smalphbet = alphabet.map((x) => x.toLowerCase());
  let index = [];
  for (let i = 0; i < str.length; i++) {
    index.push(smalphbet.indexOf(str[i]));
  }

  let word = "";
  for (let i = 0; i < index.length; i++) {
    if (index[i] == 25) {
      word += smalphbet[0];
    } else {
      word += smalphbet[index[i] + 1];
    }
  }
  return word;
};
const replace = (str) => {
  return getLetter(str);
};
console.log(replace("abcdxyz")); //bcdeyza
