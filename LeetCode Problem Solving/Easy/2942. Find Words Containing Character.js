const findWordsContaining = (words, x) => {
  let myarr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(x) !== -1) {
      myarr.push(i);
    }
  }
  return myarr;
};
console.log(findWordsContaining(["leet", "code"], "e")); // [0,1]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")); // [0,2]
