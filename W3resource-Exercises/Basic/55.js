// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

let check = (str) => {
  let p = str.match(/[p]/g).length;
  let t = str.match(/[t]/g).length;
  return p == t;
};
console.log(check("paatpss")); // false
console.log(check("paatps")); //false
console.log(check("ptaatpss")); //true
