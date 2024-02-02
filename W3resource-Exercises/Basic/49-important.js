// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function replace(str) {
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
  let result = "";
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    index = smalphbet.indexOf(str.toLowerCase()[i]);

    result += smalphbet[index + 1];
  }
  return result;
}
console.log(replace("hello")); //ifmmp
console.log(replace("PYTHON")); //qzuipo
console.log(replace("php")); //qiq
